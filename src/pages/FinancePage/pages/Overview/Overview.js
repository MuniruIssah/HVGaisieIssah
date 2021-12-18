import React from "react";

import FinanceCard from "../../components/FinanceCard/FinanceCard";
import FinanceColumnLayout from "../../sectionLayouts/FinanceColumnLayout/FinanceColumnLayout";
import {
  FinanceRevenueChartData,
  optionTypes,
  ThreeColumnFinanceChartData,
} from "../../financeUtils/chartDataAndOptions";
import "./styles.css";
import NumberOnlyList from "../../components/ItemsList/NumberOnlyList/NumberOnlyList";
import LabelAndValueStrip from "../../components/LabelAndValueStrip/LabelAndValueStrip";
import HVChartComponent from "../../components/HVChartComponent/HVChartComponent";
import { Bar } from "react-chartjs-2";
import {
  topFiveCustomers,
  vehicleRevenues,
} from "../../financeUtils/overviewLists";

const RevenueList = [
  {
    title: "1,000",
  },
  {
    title: "2,000",
  },
  {
    title: "3,000",
  },
  {
    title: "1,000",
  },
  {
    title: "2,000",
  },
  {
    title: "3,000",
  },
];

const labelandValue = [
  {
    label: "Revenue",
    value: "₵ 2,046.38",
    green: true,
  },
  {
    label: "Total Orders",
    value: "203",
  },
  {
    label: "Total Transactions",
    value: "203",
  },
];

const SideBarChart = ({ title = "Payment Gateway" }) => (
  <div style={{height:'100%'}}>
    <span
      style={{
        display: "block",
        textAlign: "left",
        fontSize: 14,
        margin:'10px 0px',
        color: "#8892A2",
      }}
    >
      {title}
    </span>
    <Bar
      data={{
        labels: ["Mobile Money", "Bank Transfer", "Cash"],
        datasets: [
          {
            label: "Payment Gateway",
            backgroundColor: ["#553FFB20", " #FF412720", "#38C98520"],
            borderColor: ["#553FFB", "#FF4127", "#38C985"],
            borderWidth: { top: 3, right: 0, bottom: 0, left: 0 },
            data: [65, 10, 76],
            barPercentage: 1.0,
            categoryPercentage: 1.0,
          },
        ],
      }}
      options={optionTypes.barChartoptions}
    />
  </div>
);

const Overview = () => {
  return (
    <div className="dashboardPage">
      <h1>
        Finance - <span>Overview</span>
      </h1>
      <FinanceCard zeeIndex sideGraph={<SideBarChart />} dates dateToday={true}>
        <LabelAndValueStrip list={labelandValue} />
      </FinanceCard>
      <FinanceCard select largeHeader title="Revenue Growth" dates>
        <HVChartComponent
          data={FinanceRevenueChartData}
          options={optionTypes.options1}
        />
      </FinanceCard>
      <FinanceColumnLayout grid="1fr 1fr 1fr">
        {ThreeColumnFinanceChartData.map((item) => (
          <FinanceCard title={item.title}>
            <h2 style={{ margin: 0, textAlign: "left",marginBottom:'2rem' }}>{item.largeHeader}</h2>
            <HVChartComponent
            height='150px'
              data={item.chartData}
              options={optionTypes.options2}
            />
          </FinanceCard>
        ))}
      </FinanceColumnLayout>
      <FinanceColumnLayout grid="1fr 1fr">
        <FinanceCard dates title="Revenues by Vehicles">
          <NumberOnlyList list={vehicleRevenues} />
        </FinanceCard>
        <FinanceCard dates title="Top 5 Customers">
          <NumberOnlyList list={topFiveCustomers} />
        </FinanceCard>
      </FinanceColumnLayout>
    </div>
  );
};

export default Overview;
