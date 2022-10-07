
var ctx3 = document.getElementById("pieChart1");
const label = [
    "Break",
    "Meetings",
    "Work"
]
const label2 = {
    boxWidth: 10,
    fontStyle: 'italic',
    fontColor: '#aaa',
    usePointStyle: true,
}

var pieChart3 = new Chart(ctx3, {
    type: 'pie',
    options: {
        legend: {
            position: 'left',
            labels: label2
        },
    },
    data: {
        labels: label,
        datasets: [
            {
                data: [300, 50, 100],
                borderWidth: 7,
                backgroundColor: [
                    '#46d8d5',
                    "#182390",
                    "#f5e132",
                ],
                hoverBackgroundColor: [
                    '#46d8d5',
                    "#182390",
                    "#f5e132",
                ]
            }]
        }
    });

var ctx3 = document.getElementById("pieChart2");

var pieChart3 = new Chart(ctx3, {
    type: 'pie',
    options: {
        legend: {
            position: 'left',
            labels: label2
        },
    },
    data: {
        labels: label,
        datasets: [
            {
                data: [300, 50, 100],
                borderWidth: 7,
                backgroundColor: [
                    '#f80c24',
                    "#182390",
                    "#f5e132",
                ],
                hoverBackgroundColor: [
                    '#46d8d5',
                    "#182390",
                    "#f5e132",
                ]
            }]
        }
    });


var xValues = ["Work", "Meeting", "Break"];
var yValues = [20,50,37,1];
var barColors = ["red", "green","blue"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "weekly report "
    }
  }
});