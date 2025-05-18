#include <WiFi.h>
#include <WiFiManager.h>  // https://github.com/tzapu/WiFiManager
#include <HardwareSerial.h>
#include <ESPAsyncWebServer.h>  // https://github.com/me-no-dev/ESPAsyncWebServer
#include <AsyncTCP.h>           // https://github.com/me-no-dev/AsyncTCP
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <FS.h>
#include <SD.h>
#include <SPI.h>
#include <time.h>
#include "esp_sntp.h"

#define SCREEN_WIDTH 128  // OLED display width, in pixels
#define SCREEN_HEIGHT 64  // OLED display height, in pixels
#define OLED_RESET -1     // Reset pin # (or -1 if sharing Arduino reset pin)

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

HardwareSerial mySerial(2);  // Use UART2 (TX2: GPIO 17, RX2: GPIO 16)
AsyncWebServer server(80);   // Create an AsyncWebServer object on port 80

String temperatureData = "";  // String to hold the temperature data
String tdsData = "";          // String to hold the TDS data
String turbidityData = "";    // String to hold the turbidity data
String phData = "";           // String to hold the pH data

bool isLogging = false;
File dataFile;
String currentFileName;

const char *ntpServer1 = "pool.ntp.org";
const char *ntpServer2 = "time.nist.gov";
const long gmtOffset_sec = 8 * 3600;  // Singapore is UTC +8
const int daylightOffset_sec = 0;     // Singapore does not have daylight savings

void setup() {
  Serial.begin(115200);                      // Initialize Serial Monitor at 115200 baud rate
  mySerial.begin(9600, SERIAL_8N1, 16, 17);  // Initialize UART2 at 9600 baud rate

  // Initialize OLED display
  if (!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    Serial.println(F("SSD1306 allocation failed"));
    for (;;)
      ;
  }
  display.display();
  delay(2000);  // Pause for 2 seconds
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);

  // Initialize WiFiManager
  WiFiManager wifiManager;

  // Uncomment this line to reset the saved WiFi credentials for testing purposes
  // wifiManager.resetSettings();

  // Try to connect to a saved WiFi network, or start the config portal
  if (!wifiManager.autoConnect("ESP32_AP")) {
    Serial.println("Failed to connect to WiFi and hit timeout");
    delay(3000);
    // Reset and try again
    ESP.restart();
    delay(5000);
  }

  // If you get here you have connected to the WiFi
  Serial.println("Connected to WiFi");
  display.clearDisplay();
  display.setCursor(0, 0);
  display.print("IP Address: ");
  display.println(WiFi.localIP());
  display.display();

  // Initialize SD card
  if (!SD.begin(5)) {
    Serial.println("Card Mount Failed");
    return;
  }

  uint8_t cardType = SD.cardType();
  if (cardType == CARD_NONE) {
    Serial.println("No SD card attached");
    return;
  }

  // Ensure saveddata directory exists
  if (!SD.exists("/saveddata")) {
    SD.mkdir("/saveddata");
  }

  // Initialize NTP client
  configTime(gmtOffset_sec, daylightOffset_sec, ntpServer1, ntpServer2);

  // Define the route to serve files from the SD card
  server.serveStatic("/", SD, "/").setDefaultFile("index.html");

  // Define the route to provide the temperature, TDS, turbidity, and pH data
  server.on("/data", HTTP_GET, [](AsyncWebServerRequest *request) {
    String json = "{\"temperature\":\"" + temperatureData + "\", \"tds\":\"" + tdsData + "\", \"turbidity\":\"" + turbidityData + "\", \"ph\":\"" + phData + "\"}";
    request->send(200, "application/json", json);
  });

  // Define the route to start logging data
  server.on("/startLogging", HTTP_GET, [](AsyncWebServerRequest *request) {
    struct tm timeinfo;
    if (!getLocalTime(&timeinfo)) {
      request->send(500, "text/plain", "Failed to obtain time");
      return;
    }

    char buffer[32];
    strftime(buffer, sizeof(buffer), "%Y-%m-%d_%H-%M-%S", &timeinfo);
    currentFileName = "/saveddata/" + String(buffer) + ".csv";
    isLogging = true;
    dataFile = SD.open(currentFileName, FILE_WRITE);
    if (dataFile) {
      dataFile.println("Timestamp,Temperature,TDS,Turbidity,pH");
      dataFile.close();
      request->send(200, "text/plain", "Logging Started with local time");
    } else {
      request->send(500, "text/plain", "Failed to create file");
    }
  });

  // Define the route to stop logging data
  server.on("/stopLogging", HTTP_GET, [](AsyncWebServerRequest *request) {
    isLogging = false;
    request->send(200, "text/plain", "Logging Stopped");
  });

  // Define the route to list files in the saveddata directory
  server.on("/listFiles", HTTP_GET, [](AsyncWebServerRequest *request) {
    String json = "[";
    File root = SD.open("/saveddata");
    File file = root.openNextFile();
    while (file) {
      if (json.length() > 1) {
        json += ",";
      }
      json += "\"" + String(file.name()) + "\"";
      file = root.openNextFile();
    }
    json += "]";
    request->send(200, "application/json", json);
  });

  // Define the route to serve a CSV file
  server.on("/file", HTTP_GET, [](AsyncWebServerRequest *request) {
    if (request->hasParam("name")) {
      String fileName = request->getParam("name")->value();
      String filePath = "/saveddata/" + fileName;
      if (SD.exists(filePath)) {
        request->send(SD, filePath, "text/csv");
      } else {
        request->send(404, "text/plain", "File not found");
      }
    } else {
      request->send(400, "text/plain", "File name parameter missing");
    }
  });

  // Define the route to delete a file
  server.on("/deleteFile", HTTP_GET, [](AsyncWebServerRequest *request) {
    if (request->hasParam("name")) {
      String fileName = request->getParam("name")->value();
      String filePath = "/saveddata/" + fileName;
      if (SD.exists(filePath)) {
        SD.remove(filePath);
        request->send(200, "text/plain", "File deleted");
      } else {
        request->send(404, "text/plain", "File not found");
      }
    } else {
      request->send(400, "text/plain", "File name parameter missing");
    }
  });


  // Start the server
  server.begin();
}

void printLocalTime() {
  struct tm timeinfo;
  if (!getLocalTime(&timeinfo)) {
    Serial.println("Failed to obtain time");
    return;
  }
  Serial.println(&timeinfo, "%A, %B %d %Y %H:%M:%S");
}

void loop() {
  // Update local time
  struct tm timeinfo;
  if (!getLocalTime(&timeinfo)) {
    Serial.println("Failed to obtain time");
    return;
  }

  if (mySerial.available()) {
    String receivedData = mySerial.readStringUntil('\n');                   // Read data from Arduino Uno
    receivedData.trim();                                                    // Remove any leading or trailing whitespace, including newlines
    int firstCommaIndex = receivedData.indexOf(',');                        // Find the first comma
    int secondCommaIndex = receivedData.indexOf(',', firstCommaIndex + 1);  // Find the second comma
    int thirdCommaIndex = receivedData.indexOf(',', secondCommaIndex + 1);  // Find the third comma

    if (firstCommaIndex > 0 && secondCommaIndex > 0 && thirdCommaIndex > 0) {
      temperatureData = receivedData.substring(0, firstCommaIndex);                   // Extract temperature
      tdsData = receivedData.substring(firstCommaIndex + 1, secondCommaIndex);        // Extract TDS
      turbidityData = receivedData.substring(secondCommaIndex + 1, thirdCommaIndex);  // Extract turbidity
      phData = receivedData.substring(thirdCommaIndex + 1);                           // Extract pH
      Serial.println("Received: " + receivedData);                                    // Print the received data to Serial Monitor

      // Update the OLED display with the received data
      display.clearDisplay();
      display.setCursor(0, 0);
      display.print("IP Address: ");
      display.println(WiFi.localIP());
      display.print("Temp: ");
      display.print(temperatureData);
      display.println(" \xC2\xB0"
                      "C");  // Correctly display the degree symbol
      display.print("TDS: ");
      display.print(tdsData);
      display.println(" ppm");
      display.print("Turbidity: ");
      display.print(turbidityData);
      display.println(" NTU");
      display.print("pH: ");
      display.print(phData);
      display.display();

      // Log data to CSV if logging is enabled
      if (isLogging) {
        char buffer[64];
        strftime(buffer, sizeof(buffer), "%Y-%m-%d %H:%M:%S", &timeinfo);
        String timestamp = String(buffer);
        dataFile = SD.open(currentFileName, FILE_APPEND);
        if (dataFile) {
          dataFile.print(timestamp);
          dataFile.print(",");
          dataFile.print(temperatureData);
          dataFile.print(",");
          dataFile.print(tdsData);
          dataFile.print(",");
          dataFile.print(turbidityData);
          dataFile.print(",");
          dataFile.println(phData);
          dataFile.close();
        }
      }
    }
  }
}
