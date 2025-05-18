listFiles();

// function populateTable(data) {
//     const lines = data.split("\n");
//     const rows = lines.slice(1).filter(line => line.trim() !== "").map(line => line.split(","));
//     const tableBody = document.querySelector("#data-table tbody");
//     tableBody.innerHTML = ""; // Clear existing rows

//     rows.forEach(row => {
//         const time = new Date(row[0]).toLocaleString(); // Format time
//         const temperature = parseFloat(row[1]).toFixed(2);
//         const tds = parseFloat(row[2]).toFixed(2);
//         const turbidity = parseFloat(row[3]).toFixed(2);
//         const ph = parseFloat(row[4]).toFixed(2);

//         const tr = document.createElement("tr");
//         tr.innerHTML = `
//             <td>${time}</td>
//             <td>${temperature}</td>
//             <td>${tds}</td>
//             <td>${turbidity}</td>
//             <td>${ph}</td>
//         `;
//         tableBody.prepend(tr); // Add new row to the top of the table
//     });
// }


document.addEventListener("DOMContentLoaded", function () {
    renderLineChart(currentChartType); // Render the chart with the default type
});

function listFiles() {
    $.getJSON("/listFiles", function (files) {
        let fileListHtml = "<ul>";
        files.forEach(file => {
            fileListHtml += `
                <li>
                    <a href="/dataInsights.html?name=${encodeURIComponent(file)}" class="btn btn-primary">${file}</a>
                    <button onclick="deleteFile('${file}')" class="btn btn-danger">Delete</button>
                </li>`;
        });
        fileListHtml += "</ul>";
        document.getElementById("file-list").innerHTML = fileListHtml;
    });
}

function deleteFile(fileName) {
    if (confirm(`Are you sure you want to delete ${fileName}?`)) {
        $.get(`/deleteFile?name=${encodeURIComponent(fileName)}`, function () {
            alert("File deleted");
            listFiles();
        }).fail(function () {
            alert("Failed to delete file");
        });
    }
}

// Chart handling
let charts = { grouped: null, separated: [] };
let currentChartType = "grouped"; // Initialize with the default chart type

function initializeChart(containerId) {
    return Highcharts.chart(containerId, {
        chart: { type: "line", height: window.innerWidth < 741 ? "300vw" : "700vw" },
        title: { text: "Data Insights" },
        xAxis: { type: "datetime", labels: { align: "left", x: -10 } },
        yAxis: { title: { text: "Value" }, labels: { enabled: true } },
        credits: { enabled: false },
        series: [
            { name: "pH", data: [], color: "#FFA500" },
            { name: "TDS", data: [], color: "#800080" },
            { name: "Turbidity", data: [], color: "#008000" },
            { name: "Temperature", data: [], color: "#ADD8E6" },
        ],
    });
}

// function updateChart(data, chartType) {
//     const lines = data.split("\n");
//     const rows = lines.slice(1).filter(line => line.trim() !== "").map(line => line.split(","));

//     const phData = [], tdsData = [], turbidityData = [], temperatureData = [];

//     rows.forEach(row => {
//         const time = new Date(row[0]).getTime();
//         phData.push([time, parseFloat(row[4])]);
//         tdsData.push([time, parseFloat(row[2])]);
//         turbidityData.push([time, parseFloat(row[3])]);
//         temperatureData.push([time, parseFloat(row[1])]);
//     });

//     if (chartType === "grouped") {
//         charts.grouped.series[0].setData(phData);
//         charts.grouped.series[1].setData(tdsData);
//         charts.grouped.series[2].setData(turbidityData);
//         charts.grouped.series[3].setData(temperatureData);
//     } else {
//         charts.separated[0].series[0].setData(phData);
//         charts.separated[1].series[0].setData(tdsData);
//         charts.separated[2].series[0].setData(turbidityData);
//         charts.separated[3].series[0].setData(temperatureData);
//     }
// }

// function fetchData(chartType) {
//     const urlParams = new URLSearchParams(window.location.search);
//     const fileName = urlParams.get("name");
//     if (fileName) {
//         $.get(`/file?name=${encodeURIComponent(fileName)}`, function (data) {
//             updateChart(data, chartType);
//             populateTable(data);
//         });
//     }
// }

function renderLineChart(chartType) {
    currentChartType = chartType; // Set the current chart type

    const container = document.getElementById("lineChartContainerLive") || document.getElementById("lineChartContainer");
    container.innerHTML = "";

    if (chartType === "grouped") {
        charts.grouped = initializeChart(container.id);
        fetchData("grouped");
    } else {
        container.innerHTML = `
            <div id="lineChart1"></div>
            <div id="lineChart2"></div>
            <div id="lineChart3"></div>
            <div id="lineChart4"></div>`;

        charts.separated = ["pH", "TDS", "Turbidity", "Temperature"].map((param, index) => {
            return Highcharts.chart(`lineChart${index + 1}`, {
                chart: { type: "line", height: "250px" },
                title: { text: param },
                xAxis: { type: "datetime", labels: { align: "left", x: -10 } },
                yAxis: { title: { text: "Value" }, labels: { enabled: true } },
                credits: { enabled: false },
                series: [{ name: param, data: [], color: ["#FFA500", "#800080", "#008000", "#ADD8E6"][index] }],
            });
        });

        fetchData("separated");
    }
}

// Set up the toggle button
const chartTypeButton = document.getElementById("chartTypeButton");
chartTypeButton.addEventListener("click", () => {
    const isGrouped = chartTypeButton.textContent.includes("Grouped");
    renderLineChart(isGrouped ? "separated" : "grouped");
    chartTypeButton.textContent = isGrouped ? "Separated Data" : "Grouped Data";
});

function stopLogging() {
    $.get("/stopLogging", function () {
        $.getJSON("/listFiles").done(function (files) {
            if (files.length > 0) {
                const lastFile = files[files.length - 1];
                alert(lastFile);
                window.location.href = `DataInsights.html?name=${encodeURIComponent(lastFile)}`;
            } else {
                alert("No files found.");
            }
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.error("Failed to list files:", textStatus, errorThrown);
        });
    });
}
function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Ensures integer values
}

function generateRandomData() {
    let data = "timestamp,temperature,tds,turbidity,ph\n";
    const currentTime = new Date().getTime();
    for (let i = 0; i < 10; i++) {
        const timestamp = currentTime - i * 60000; // Each row is one minute apart
        const temperature = getRandomValue(10, 40); // Random temperature between 10 and 40 °C
        const tds = getRandomValue(0, 1500); // Random TDS between 0 and 1500 ppm
        const turbidity = getRandomValue(0, 10); // Random turbidity between 0 and 10 NTU
        const ph = getRandomValue(0, 14); // Random pH between 0 and 14

        data += `${timestamp},${temperature},${tds},${turbidity},${ph}\n`;
    }
    return data;
}

function populateTable(data) {
    const lines = data.split("\n");
    const rows = lines.slice(1).filter(line => line.trim() !== "").map(line => line.split(","));
    const tableBody = document.querySelector("#data-table tbody");
    tableBody.innerHTML = ""; // Clear existing rows

    rows.forEach(row => {
        const time = new Date(parseInt(row[0])).toLocaleString(); // Format time
        const temperature = row[1];
        const tds = row[2];
        const turbidity = row[3];
        const ph = row[4];

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${time}</td>
            <td>${temperature}</td>
            <td>${tds}</td>
            <td>${turbidity}</td>
            <td>${ph}</td>
        `;
        tableBody.prepend(tr); // Add new row to the top of the table
    });
}

// Chart handling remains the same
function updateChart(data, chartType) {
    const lines = data.split("\n");
    const rows = lines.slice(1).filter(line => line.trim() !== "").map(line => line.split(","));

    const phData = [], tdsData = [], turbidityData = [], temperatureData = [];

    rows.forEach(row => {
        const time = new Date(parseInt(row[0])).getTime();
        phData.push([time, parseFloat(row[4])]);
        tdsData.push([time, parseFloat(row[2])]);
        turbidityData.push([time, parseFloat(row[3])]);
        temperatureData.push([time, parseFloat(row[1])]);
    });

    if (chartType === "grouped") {
        charts.grouped.series[0].setData(phData);
        charts.grouped.series[1].setData(tdsData);
        charts.grouped.series[2].setData(turbidityData);
        charts.grouped.series[3].setData(temperatureData);
    } else {
        charts.separated[0].series[0].setData(phData);
        charts.separated[1].series[0].setData(tdsData);
        charts.separated[2].series[0].setData(turbidityData);
        charts.separated[3].series[0].setData(temperatureData);
    }
}

function fetchData(chartType) {
    const data = generateRandomData(); // Generate random data
    updateChart(data, chartType);
    populateTable(data);
}

document.addEventListener("DOMContentLoaded", function () {
    renderLineChart(currentChartType); // Render the chart with the default type
});

// Rest of the chart rendering and toggling code remains the same

// Set an interval for live data fetching if necessary
if (window.location.pathname.includes("liveData.html")) {
    setInterval(function () {
        fetchData(currentChartType); // Use the current chart type
    }, 1000);
}
