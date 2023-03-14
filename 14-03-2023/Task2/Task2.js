// --------------------- BAR CHART ---------------------------------------- 
let xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
let yValues = [55, 49, 44, 24, 15];
var barColors = ["red", "green", "blue", "orange", "brown"];

new Chart("barChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            labels: '',
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Bar Chart",
        }
    }
});

// ------------------------------- Line Chart -----------------------------------------

xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

new Chart("lineChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,255,1.0)",
            borderColor: "rgba(0,0,255,0.1)",
            data: yValues
        }]
    },
    options: {
        legend: { display: false },
        scales: {
            yAxes: [{ ticks: { min: 4, max: 16 } }],
        },
        title: {
            display: true,
            text: "Line Chart"
        }
    }
});


// -------------------------------
xValues = [];
yValues = [];
generateData("Math.sin(x)", 0, 10, 0.5);

new Chart("functionalChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,
            pointRadius: 2,
            borderColor: "rgba(0,0,255,0.5)",
            data: yValues
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "y = sin(x)",
            fontSize: 16
        }
    }
});
function generateData(value, i1, i2, step = 1) {
    for (let x = i1; x <= i2; x += step) {
        yValues.push(eval(value));
        xValues.push(x);
    }
}