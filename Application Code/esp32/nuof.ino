#include <OneWire.h>
#include <DallasTemperature.h>
#include <GravityTDS.h>

#define ONE_WIRE_BUS 2
#define TDS_PIN A5
#define TURBIDITY_PIN A1
#define PH_PIN A0

OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);
GravityTDS gravityTds;

const float pH_3_voltage = 4.5898;
const float pH_7_voltage = 3.9307;
const float pH_13_voltage = 3.4180;

float calculatePH(float voltage) {
  if (voltage >= pH_3_voltage) {
    return 3.0 - ((voltage - pH_3_voltage) * (3.0 - 0.0) / (5.0 - pH_3_voltage));
  } else if (voltage >= pH_7_voltage) {
    return 7.0 - ((voltage - pH_7_voltage) * (7.0 - 3.0) / (pH_3_voltage - pH_7_voltage));
  } else if (voltage >= pH_13_voltage) {
    return 13.0 - ((voltage - pH_13_voltage) * (13.0 - 7.0) / (pH_7_voltage - pH_13_voltage));
  } else {
    return 13.0 + ((pH_13_voltage - voltage) * (14.0 - 13.0) / (pH_13_voltage - 0.0));
  }
}

void setup() {
  Serial.begin(9600);
  sensors.begin();
  gravityTds.setPin(TDS_PIN);
  gravityTds.setAref(5.0);
  gravityTds.setAdcRange(1024);
  gravityTds.begin();
}

unsigned long previousMillis = 0;
const unsigned long interval = 1000;
const int numReadings = 15;
int readingCount = 0;
float temperatureSum = 0, tdsSum = 0, turbiditySum = 0, phSum = 0;

void loop() {
  unsigned long currentMillis = millis();

  // Take a set of readings
  sensors.requestTemperatures();
  float temperatureC = sensors.getTempCByIndex(0);
  temperatureSum += temperatureC;

  gravityTds.update();
  float tdsValue = gravityTds.getTdsValue()*10;
  tdsSum += tdsValue;

  int turbidityValue = analogRead(TURBIDITY_PIN);
  float turbidityNTU = map(turbidityValue, 771, 0, 0, 1000) / 100.0; // Expanded range
  turbidityNTU = constrain(turbidityNTU, 0, 100);
  turbiditySum += turbidityNTU;

  int phValue = analogRead(PH_PIN);
  float voltage = phValue * (5.0 / 1024.0);
  float ph = calculatePH(voltage);
  ph = constrain(ph, 0, 14);
  phSum += ph;

  readingCount++;

  // Check if it's time to send data
  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;

    // Calculate averages
    float avgTemperature = temperatureSum / readingCount;
    float avgTds = tdsSum / readingCount;
    float avgTurbidity = turbiditySum / readingCount;
    float avgPh = phSum / readingCount;

    // Send data to serial
    Serial.print(avgTemperature, 2);
    Serial.print(",");
    Serial.print(avgTds, 2);
    Serial.print(",");
    Serial.print(avgTurbidity, 2);
    Serial.print(",");
    Serial.println(avgPh, 2);

    // Reset sums and count
    temperatureSum = tdsSum = turbiditySum = phSum = 0;
    readingCount = 0;
  }
}