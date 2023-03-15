// --------------------- BAR CHART ---------------------------------------- 
let xValues = ["Red", "Green", "Blue", "Orange", "Brown", "Pink"];
let yValues = [28, 57, 21, 44, 28, 32];
var barColors = ["red", "green", "blue", "orange", "brown", "pink"];

new Chart("barChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            labels: '',
            data: yValues,
            backgroundColor: barColors,
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Bar Chart",
        },
        scales :{
            yAxes : [{ticks:{min:10, max : 60}}]
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
            backgroundColor: "red",
            borderColor: "lightblue",
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


// ------------------------------- Functional Line Chart
xValues = [];
yValues = [];
generateData("Math.sin(x)", 0, 10, 0.5);

new Chart("functionalChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,
            pointRadius: 4,
            pointBackgroundColor:'black',
            borderColor: "darkgray",
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
// ---------------------------------------- Scattered Plot
const scData = {
    datasets: [{
        pointRadius: 4,
        pointBackgroundColor: "brown",
        data: [
            { x: 50, y: 7 },
            { x: 60, y: 8 },
            { x: 70, y: 8 },
            { x: 80, y: 9 },
            { x: 90, y: 9 },
            { x: 100, y: 9 },
            { x: 110, y: 10 },
            { x: 120, y: 11 },
            { x: 130, y: 14 },
            { x: 140, y: 14 },
            { x: 150, y: 15 }
        ]
    }]
}

const scOption = {
    legend: { display: false },
    scales: {
        xAxes: [{ ticks: { min: 40, max: 160 } }],
        yAxes: [{ ticks: { min: 6, max: 16 } }],
    },
    title: {
        display: true,
        text: "Scattered Plot"
    }
}

new Chart("scatteredPlot", {
    type: "scatter",
    data: scData,
    options: scOption
});

// -----------------------------------

const data = {
    labels: [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
            'rgb(255, 62, 92)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
        ]
    }]
};

const config = {
    type: 'pie',
    data: data,
    options: {
        title: {
            display: true,
            text: "Pie Chart"
        }
    }
};
new Chart('piChart', config)