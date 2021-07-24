import React from "react";
import { Line } from "react-chartjs-2";
import "./styles.css";
const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Wahever",
      data: [12, 19, 3, 5, 2, 3],
      fill: true,
      backgroundColor: "#553FFB20",
      borderColor: "#553FFB",
    },
  ],
};
const data2 = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Wahever",
      data: [13, 6, 10, 15, 4, 7],
      fill: false,
      backgroundColor: "#553FFB20",
      borderColor: "#553FFB",
    },
  ],
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'green'
    }
  },
  scales: {
    x: {
      // title: {
      //   color: 'red',
      //   display: true,
      //   text: 'Month'
      // }
  
      // display:false,
      grid:{
       drawBorder:true,
       borderDash:[3,3],
      }
      
    },
    y:{
      // display:false,
      grid:{
        display:false,

      }
    }
  }
};

const HVChartComponent = () => (
  <div className="chartWrapper">
    <Line data={data} options={chartOptions} width={0.3} height={0.1} />
  </div>
);

export default HVChartComponent;
