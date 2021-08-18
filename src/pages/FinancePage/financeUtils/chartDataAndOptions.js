//For the large chart
export const FinanceRevenueChartData = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      radius: 1,
      pointStyle: "line",
      data: [5, 4, 6, 5, 10, 3],
      fill: true,
      backgroundColor: "#553FFB20",
      borderColor: "#553FFB",
    },
  ],
};

//For the three column cards with charts
export const ThreeColumnFinanceChartData = [
  {
    title: "Delivered Orders",
    largeHeader: "10-₵18,210",
    chartData: {
      labels: ["Mon", "", "", "", "", "", "Sun"],
      datasets: [
        {
          radius: 1,
          pointStyle: "line",
          data: [5, 4, 6, 5, 10, 3, 2],
          fill: true,
          backgroundColor: "#38C98520",
          borderColor: "#38C985",
        },
      ],
    },
  },
  {
    title: "Pending Orders",
    largeHeader: "5-₵4,129",
    chartData: {
      labels: ["Mon", "", "", "", "", "", "Sun"],
      datasets: [
        {
          radius: 1,
          pointStyle: "line",
          data: [5, 4, 6, 5, 10, 3, 3],
          fill: true,
          backgroundColor: "#FF412720",
          borderColor: "#FF4127",
        },
      ],
    },
  },
  {
    title: "Cancelled Orders",
    largeHeader: "3-₵7,130",
    chartData: {
      labels: ["Mon", "", "", "", "", "", "Sun"],
      datasets: [
        {
          radius: 1,
          pointStyle: "line",
          data: [5, 4, 6, 5, 10, 3, 6],
          fill: true,
          backgroundColor: "#553FFB20",
          borderColor: "#553FFB",
        },
      ],
    },
  },
];
//All the chart options
export const optionTypes = {
  options1: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          drawBorder: true,
          borderDash: [3, 3],
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  },
  options2: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
      },
    },
  },
  barChartoptions: {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 20,
        pointStyle: "rect",
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        grid: {
          display: false,
        },
      },
    },
  },
};
