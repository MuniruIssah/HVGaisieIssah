import React from "react";
import { Line } from "react-chartjs-2";
import "./styles.css";
const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of Wahever",
      data: [5, 4, 6, 5, 10, 3],
      fill: true,
      backgroundColor: "#553FFB20",
      borderColor: "#553FFB",
    },
  ],
};

const HVChartComponent = ({ data, options }) => (
  <div className="chartWrapper">
    <Line data={data} options={options} width={0.3} height={0.1} />
  </div>
);

export default HVChartComponent;
