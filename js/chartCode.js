let canvas = document.getElementById("lineChart");
let ctx = canvas.getContext("2d");
console.log(ctx);
canvas.width = canvas.parentElement.offsetWidth;
labels = [];
data1 = [];
data2 = [];
data3 = [];
data4 = [];
data5 = [];
data6 = [];
data7 = [];
for (let i = 1; i <= 30; i++) {
    labels.push(i);
    data1.push(rand());
    data2.push(rand());
    data3.push(rand());
    data4.push(rand());
    data5.push(rand());
    data6.push(rand());
    data7.push(rand());
}
let lineChart = new Chart(ctx, {
    type: "line",
    data: {
        labels,
        datasets: [
            {
                data: data1,
                backgroundColor: "gold",
                borderColor: "gold",
                borderWidth: 2,
            },
            {
                data: data2,
                backgroundColor: "red",
                borderColor: "red",
                borderWidth: 2,
            },
            {
                data: data3,
                borderColor: "blue",
                backgroundColor: "blue",
                borderWidth: 2,
            },
            {
                data: data4,
                borderColor: "green",
                borderWidth: 2,
            },
            {
                data: data5,
                borderColor: "pink",
                borderWidth: 2,
            },
            {
                data: data6,
                borderColor: "lime",
                borderWidth: 2,
            },
            {
                data: data7,
                borderColor: "orange",
                borderWidth: 2,
            },
        ],
    },
    options: {
        responsive: false,
        fill: false,
        scales: {
            xAxes: [{
                gridLines: {
                    display:false
                },
                ticks: {
                    suggestedMin: 1,
                    suggestedMax: 31
                }
            }],
            yAxes: [{
                gridLines: {
                    display:false
                },
                ticks: {
                    suggestedMin: -100,
                    suggestedMax: 100
                }
            }]
        },
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        },
        elements: {
            point:{
                radius: 0
            },
            line: {
                fill: false
            }
        }
    },
});

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rand() {
    return getRandomNumber(-90, 90);
}
