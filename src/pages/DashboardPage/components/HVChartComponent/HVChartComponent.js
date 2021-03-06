import React from "react";
import { Line } from "react-chartjs-2";
import "./styles.css";
const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      radius: 1,
      pointStyle: "circle",
      data: [5, 4, 6, 5, 10, 3],
      fill: true,
      backgroundColor: "#553FFB20",
      borderColor: "#553FFB",
    },
  ],
};
const data2 = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"],
  datasets: [
    {
      radius: 1,
      pointStyle: "circle",
      label: "Vehicle 1",
      data: [5, 4, 7, 6, 10, 7,2],
      fill: true,
      backgroundColor: "#38C98520",
      borderColor: "#38C985",
    },
    {
      radius: 1,
      pointStyle: "circle",
      label: "Vehicle 2",
      data: [13, 6, 10, 15, 4, 7,1],
      fill: true,
      backgroundColor: "#FF412720",
      borderColor: "#FF4127",
    },
    {
      radius: 1,
      pointStyle: "circle",
      label: "Vehicle 3",
      data: [5, 7, 9, 18, 1, 8,9],
      fill: true,
      backgroundColor: "#553FFB20",
      borderColor: "#553FFB",
    },
  ],
};

var chartOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      // title: {
      //   color: 'red',
      //   display: true,
      //   text: 'Month'
      // }

      // display:false,
      grid: {
        drawBorder: true,
        borderDash: [3, 3],
      },
    },
    y: {
      // display:false,
      grid: {
        display: false,
      },
    },
  },
};
var chartOptions2 = {
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid:{
        display:false
      }
    },
    y: {
      display: false,
    },
  },
};

const HVChartComponent = ({ multi,height }) => (
  <div className="chartWrapper" style={{height:height}}>
    {!multi && (
      <Line  data={data} options={chartOptions} width={0.3} height={0.1} />
    )}
    {multi && (
      <Line data={data2} options={chartOptions2} width={0.3} height={0.1} />
    )}
  </div>
);

export default HVChartComponent;
