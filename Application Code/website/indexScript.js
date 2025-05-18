
// GAUGES 
// External variables for customization
const chartSettings = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '300', // Thin weight
    titleColor: "#000000", // Black
    fontSizeTitle: "18px",
    dataLabelColor: "#000000", // Black
    fontSizeDataLabel: "16px",
    dialColor: "#000000", // Black
    tickColor: "#000000", // Black
    yAxisLabelColor: "#000000", // Black
    plotBandColors: {
        pH: [
            "#ec1b26", "#f46433", "#f88f1f", "#ffc323", "#fef100", 
            "#85c341", "#4cb748", "#34a94b", "#0ab8b6", "#4690ce", 
            "#3753a5", "#5a51a2", "#64459d", "#6c2181"
        ],
        tds: [
            "#fef100", "#ffc323", "#f88f1f", "#f46433", "#ec1b26"
        ],
        turbidity: [
            "#4cb748", "#fef100", "#f46433"
        ],
        temperature: [
            "#3753a5", "#4690ce", "#fef100", "#f88f1f", "#ec1b26"
        ]
    }
};

// Set global options
Highcharts.setOptions({
    chart: {
        type: "gauge",
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: "80%",
        backgroundColor: "transparent",
        margin: [30, 0, , 0],

    },
    title: {
        style: {
            fontFamily: chartSettings.fontFamily,
            fontWeight: chartSettings.fontWeight,
        }
    },
    yAxis: {
        labels: {
            style: {
                fontFamily: chartSettings.fontFamily,
                fontWeight: chartSettings.fontWeight,
            }
        }
    },
    tooltip: {
        style: {
            fontFamily: chartSettings.fontFamily,
            fontWeight: chartSettings.fontWeight,
        }
    },
    dataLabels: {
        style: {
            fontFamily: chartSettings.fontFamily,
            fontWeight: chartSettings.fontWeight,
        }
    },
});

// Create gauge chart for pH level
var pHLevel = Highcharts.chart("pHGauge", {
    chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: "pH Level",
        style: {
            color: chartSettings.titleColor,
            fontSize: chartSettings.fontSizeTitle,
            fontFamily: chartSettings.fontFamily,
            fontWeight: chartSettings.fontWeight,
        },
    },
    pane: {
        startAngle: -120,
        endAngle: 120,
        background: null,
        center: ["50%", "75%"],
        size: "130%",
    },
    yAxis: {
        min: 0,
        max: 14,
        tickPixelInterval: 36,
        tickPosition: "inside",
        tickColor: chartSettings.tickColor,
        tickLength: 20,
        tickWidth: 0,
        minorTickInterval: null,
        labels: {
            distance: -35,
            color: chartSettings.titleColor,
            style: {
                fontSize: "14px",
                color: chartSettings.yAxisLabelColor,
                fontFamily: chartSettings.fontFamily,
                fontWeight: chartSettings.fontWeight,
            },
        },
        lineWidth: 0,
        plotBands: chartSettings.plotBandColors.pH.map((color, index) => ({
            from: index,
            to: index + 1,
            color: color,
            thickness: 20,
        })),
    },
    series: [
        {
            name: "pH",
            data: [0],
            tooltip: {
                valueSuffix: " pH",
            },
            dataLabels: {
                format: "{y} pH",
                borderWidth: 0,
                color: chartSettings.dataLabelColor,
                style: {
                    fontSize: chartSettings.fontSizeDataLabel,
                    textOutline: "0px contrast",
                    fontFamily: chartSettings.fontFamily,
                    fontWeight: chartSettings.fontWeight,
                },
            },
            dial: {
                backgroundColor: chartSettings.dialColor,
                baseWidth: 12,
                baseLength: "0%",
                rearLength: "0%",
            },
            pivot: {
                backgroundColor: chartSettings.dialColor,
                radius: 6,
            },
        },
    ],
});

// Create gauge chart for TDS level
var tdsLevel = Highcharts.chart("tdsGauge", {
    title: {
        text: "TDS Level",
        style: {
            color: chartSettings.titleColor,
            fontSize: chartSettings.fontSizeTitle,
            fontFamily: chartSettings.fontFamily,
            fontWeight: chartSettings.fontWeight,
        },
    },
    pane: {
        startAngle: -120,
        endAngle: 120,
        background: null,
        center: ["50%", "75%"],
        size: "130%",
    },
    yAxis: {
        min: 0,
        max: 1500,
        tickPixelInterval: 72,
        tickPosition: "inside",
        tickColor: chartSettings.tickColor,
        tickLength: 20,
        tickWidth: 0,
        minorTickInterval: null,
        labels: {
            distance: -40,
            color: chartSettings.titleColor,
            style: {
                fontSize: "14px",
                color: chartSettings.yAxisLabelColor,
                fontFamily: chartSettings.fontFamily,
                fontWeight: chartSettings.fontWeight,
            },
        },
        lineWidth: 0,
        plotBands: [
            { from: 0, to: 300, color: chartSettings.plotBandColors.tds[0], thickness: 20 },
            { from: 300, to: 600, color: chartSettings.plotBandColors.tds[1], thickness: 20 },
            { from: 600, to: 900, color: chartSettings.plotBandColors.tds[2], thickness: 20 },
            { from: 900, to: 1200, color: chartSettings.plotBandColors.tds[3], thickness: 20 },
            { from: 1200, to: 1500, color: chartSettings.plotBandColors.tds[4], thickness: 20 }
        ],
    },
    series: [
        {
            name: "TDS",
            data: [0],
            tooltip: {
                valueSuffix: " ppm",
            },
            dataLabels: {
                format: "{y} ppm",
                borderWidth: 0,
                color: chartSettings.dataLabelColor,
                style: {
                    fontSize: chartSettings.fontSizeDataLabel,
                    textOutline: "0px contrast",
                    fontFamily: chartSettings.fontFamily,
                    fontWeight: chartSettings.fontWeight,
                },
            },
            dial: {
                backgroundColor: chartSettings.dialColor,
                baseWidth: 12,
                baseLength: "0%",
                rearLength: "0%",
            },
            pivot: {
                backgroundColor: chartSettings.dialColor,
                radius: 6,
            },
        },
    ],
});

// Create gauge chart for Turbidity level
var turbidityLevel = Highcharts.chart("turbidityGauge", {
    title: {
        text: "Turbidity Level",
        style: {
            color: chartSettings.titleColor,
            fontSize: chartSettings.fontSizeTitle,
            fontFamily: chartSettings.fontFamily,
            fontWeight: chartSettings.fontWeight,
        },
    },
    pane: {
        startAngle: -120,
        endAngle: 120,
        background: null,
        center: ["50%", "75%"],
        size: "130%",
    },
    yAxis: {
        min: 0,
        max: 10,
        tickInterval: 1, // Ensure only whole numbers are shown
        allowDecimals: false, // Disable decimals
        tickPixelInterval: 36,
        tickPosition: "inside",
        tickColor: chartSettings.tickColor,
        tickLength: 20,
        tickWidth: 0,
        minorTickInterval: null,
        labels: {
            distance: -35,
            color: chartSettings.titleColor,
            style: {
                fontSize: "14px",
                color: chartSettings.yAxisLabelColor,
                fontFamily: chartSettings.fontFamily,
                fontWeight: chartSettings.fontWeight,
            },
        },
        lineWidth: 0,
        plotBands: [
            { from: 0, to: 1, color: chartSettings.plotBandColors.turbidity[0], thickness: 20 },
            { from: 1, to: 5, color: chartSettings.plotBandColors.turbidity[1], thickness: 20 },
            { from: 5, to: 10, color: chartSettings.plotBandColors.turbidity[2], thickness: 20 }
        ],
        
    },
    series: [
        {
            name: "Turbidity",
            data: [0],
            tooltip: {
                valueSuffix: " NTU",
            },
            dataLabels: {
                format: "{y} NTU",
                borderWidth: 0,
                color: chartSettings.dataLabelColor,
                style: {
                    fontSize: chartSettings.fontSizeDataLabel,
                    textOutline: "0px contrast",
                    fontFamily: chartSettings.fontFamily,
                    fontWeight: chartSettings.fontWeight,
                },
            },
            dial: {
                backgroundColor: chartSettings.dialColor,
                baseWidth: 12,
                baseLength: "0%",
                rearLength: "0%",
            },
            pivot: {
                backgroundColor: chartSettings.dialColor,
                radius: 6,
            },
        },
    ],
});

// Create gauge chart for Temperature level
var temperatureLevel = Highcharts.chart("temperatureGauge", {
    title: {
        text: "Temperature",
        style: {
            color: chartSettings.titleColor,
            fontSize: chartSettings.fontSizeTitle,
            fontFamily: chartSettings.fontFamily,
            fontWeight: chartSettings.fontWeight,
        },
    },
    pane: {
        startAngle: -120,
        endAngle: 120,
        background: null,
        center: ["50%", "75%"],
        size: "130%",
    },
    yAxis: {
        min: 0,
        max: 100,
        tickPixelInterval: 36,
        tickPosition: "inside",
        tickColor: chartSettings.tickColor,
        tickLength: 20,
        tickWidth: 0,
        minorTickInterval: null,
        tickInterval: 20,  // Set the interval between ticks to 20
        labels: {
            distance: -40,
            color: chartSettings.titleColor,
            style: {
                fontSize: "14px",
                color: chartSettings.yAxisLabelColor,
                fontFamily: chartSettings.fontFamily,
                fontWeight: chartSettings.fontWeight,
            },
        },
        lineWidth: 0,
        plotBands: [
            { from: 0, to: 20, color: chartSettings.plotBandColors.temperature[0], thickness: 20 },
            { from: 20, to: 40, color: chartSettings.plotBandColors.temperature[1], thickness: 20 },
            { from: 40, to: 60, color: chartSettings.plotBandColors.temperature[2], thickness: 20 },
            { from: 60, to: 80, color: chartSettings.plotBandColors.temperature[3], thickness: 20 },
            { from: 80, to: 100, color: chartSettings.plotBandColors.temperature[4], thickness: 20 }
        ],
    },
    series: [
        {
            name: "Temperature",
            data: [0],
            tooltip: {
                valueSuffix: " °C",
            },
            dataLabels: {
                format: "{y} °C",
                borderWidth: 0,
                color: chartSettings.dataLabelColor,
                style: {
                    fontSize: chartSettings.fontSizeDataLabel,
                    textOutline: "0px contrast",
                    fontFamily: chartSettings.fontFamily,
                    fontWeight: chartSettings.fontWeight,
                },
            },
            dial: {
                backgroundColor: chartSettings.dialColor,
                baseWidth: 12,
                baseLength: "0%",
                rearLength: "0%",
            },
            pivot: {
                backgroundColor: chartSettings.dialColor,
                radius: 6,
            },
        },
    ],
});
function updateGauge(gauge, value) {
    gauge.series[0].points[0].update(value);
}


// Function to fetch data and update gauges and text placeholders
function fetchData() {
    $.getJSON("/data", function (data) {
        // Parse and limit TDS
        let tdsValue = parseFloat(data.tds);
        if (tdsValue > 1500) {
            tdsValue = 1500;
        }

        // Parse and limit turbidity
        let turbidityValue = parseFloat(data.turbidity);
        if (turbidityValue > 10) {
            turbidityValue = 10;
        }

        // Parse pH and temperature
        let phValue = parseFloat(data.ph);
        let temperatureValue = parseFloat(data.temperature);

        // Update gauges with limited values (assuming updateGauge is defined elsewhere)
        updateGauge(pHLevel, phValue);
        updateGauge(tdsLevel, tdsValue);
        updateGauge(turbidityLevel, turbidityValue);
        updateGauge(temperatureLevel, temperatureValue);

        // Update text in the placeholders using IDs
        document.getElementById("phValue").textContent = "pH Level: " + phValue.toFixed(2);
        document.getElementById("tdsValue").textContent = "TDS Level: " + tdsValue.toFixed(2) + " ppm";
        document.getElementById("turbidityValue").textContent = "Turbidity: " + turbidityValue.toFixed(2) + " NTU";
        document.getElementById("temperatureValue").textContent = "Temperature: " + temperatureValue.toFixed(2) + " °C";

        // Get health risks and recommendations based on the fetched data
        const healthRisksText = getHealthRisks(tdsValue, turbidityValue, phValue);
        const recommendationText = getRecommendation(tdsValue, turbidityValue, phValue);

        // Get sensor descriptions
        const phDescription = getSensorDescription('ph', phValue);
        const tdsDescription = getSensorDescription('tds', tdsValue);
        const turbidityDescription = getSensorDescription('turbidity', turbidityValue);
        const temperatureDescription = getSensorDescription('temperature', temperatureValue);

        // Update the text in the placeholders for health risks and recommendations
        document.getElementById("medicalText").textContent = healthRisksText;
        document.getElementById("recommendationText").textContent = recommendationText;

        // Update the text in the placeholders for sensor descriptions
        document.getElementById("phDescription").textContent = phDescription;
        document.getElementById("tdsDescription").textContent = tdsDescription;
        document.getElementById("turbidityDescription").textContent = turbidityDescription;
        document.getElementById("temperatureDescription").textContent = temperatureDescription;

    });
}



// Call fetchData initially
fetchData();
// Set up interval to fetch data periodically (e.g., every 5 seconds)
setInterval(fetchData, 1000);


function startLogging() {
    console.log("start logging");

    // Start logging with datetime
    const dateTime = new Date()
        .toISOString()
        .slice(0, 19)
        .replace(/:/g, "-");

    $.get(`/startLogging?datetime=${dateTime}`)
        .done(function () {
            alert("Logging Started");
            
            // Now get the list of files after logging has started
            $.getJSON("/listFiles")
                .done(function (files) {
                    if (files.length > 0) {
                        const lastFile = files[files.length - 1]; // Get the last file
                        alert(lastFile); // Alert only the last file
                        
                        // Redirect to liveData.html with the last file's name as a query parameter
                        window.location.href = `liveData.html?name=${encodeURIComponent(lastFile)}`;
                    } else {
                        alert("No files found.");
                    }
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    console.error("Failed to list files:", textStatus, errorThrown);
                });
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.error("Failed to start logging:", textStatus, errorThrown);
            alert("Failed to start logging");
        });
}
