$(document).ready(function () {
    labels = [];
    data1 = [];
    data2 = [];
    data3 = [];
    data4 = [];
    data5 = [];
    data6 = [];
    data7 = [];
    for (let i = 1; i <= 100; i++) {
        labels.push(i);
        data1.push(rand());
        data2.push(rand());
        data3.push(rand());
        data4.push(rand());
        data5.push(rand());
        data6.push(rand());
        data7.push(rand());
    }

    $(function () {
        let ctx = document.getElementById("lineChart").getContext("2d");
        let flagSet = false;
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
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                suggestedMin: 1,
                                suggestedMax: 100,
                                fontStyle: "600",
                                fontFamily: "gilroy-medium",
                                fontColor:"#000000",
                                fontSize:14
                            },
                        },
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: false,
                            },
                            ticks: {
                                suggestedMin: -100,
                                suggestedMax: 100,
                                stepSize: 25,
                                fontStyle: "600",
                                fontFamily: "gilroy-medium",
                                fontColor:"#000000",
                                fontSize:14
                            },
                        },
                    ],
                },
                legend: {
                    display: false,
                },
                tooltips: {
                    enabled: false,
                },
                elements: {
                    point: {
                        radius: 0,
                    },
                    line: {
                        fill: false,
                    },
                },
                animation: {
                    onComplete: function () {
                        if (!flagSet) {
                            let scale = window.devicePixelRatio;
                            let sourceCanvas = lineChart.chart.canvas;
                            let copyWidth = lineChart.scales["y-axis-0"].width - 5;
                            let copyHeight = lineChart.scales["y-axis-0"].height + lineChart.scales["y-axis-0"].top + 5;
                            let targetCtx = document.getElementById("axisY-lineChart").getContext("2d");
                            targetCtx.scale(scale, scale);
                            targetCtx.canvas.width = copyWidth * scale;
                            targetCtx.canvas.height = copyHeight * scale;
                            targetCtx.canvas.style.width = `${copyWidth}px`;
                            targetCtx.canvas.style.height = `${copyHeight}px`;
                            targetCtx.drawImage(sourceCanvas, 0, 0, copyWidth * scale, copyHeight * scale, 0, 0, copyWidth * scale, copyHeight * scale);
                            let sourceCtx = sourceCanvas.getContext("2d");
                            sourceCtx.clearRect(0, 0, copyWidth * scale, copyHeight * scale);
                            flagSet = true;
                        }
                    },
                    onProgress: function () {
                        if (flagSet === true) {
                            let copyWidth = lineChart.scales["y-axis-0"].width;
                            let copyHeight = lineChart.scales["y-axis-0"].height + lineChart.scales["y-axis-0"].top + 5;
                            let sourceCtx = lineChart.chart.canvas.getContext("2d");
                            sourceCtx.clearRect(0, 0, copyWidth, copyHeight);
                        }
                    },
                },
            },
        });
    });

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function rand() {
        return getRandomNumber(-90, 90);
    }
});
