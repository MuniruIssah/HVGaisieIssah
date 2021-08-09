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

const SideBarChart = () => (
  <Bar
    data={{
      labels: ["Mobile Money", "Bank Transfer", "Cash"],
      datasets: [
        {
          label: "Rainfall",
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
);

const Overview = () => {
  return (
    <div className="dashboardPage">
      <h1>Finance - <span>Overview</span></h1>
      <FinanceCard
        sideGraph={<SideBarChart />}
        dates
        dateToday={true}
      >
        <LabelAndValueStrip list={labelandValue} />
      </FinanceCard>
      <FinanceCard
        select
        largeHeader
        title="Revenue Growth"
        dates
      >
        <HVChartComponent
          data={FinanceRevenueChartData}
          options={optionTypes.options1}
        />
      </FinanceCard>
      <FinanceColumnLayout grid="1fr 1fr 1fr">
        {ThreeColumnFinanceChartData.map((item) => (
          <FinanceCard title={item.title}>
            <h2 style={{ margin: 0, textAlign: "left" }}>{item.largeHeader}</h2>
            <HVChartComponent
              data={item.chartData}
              options={optionTypes.options2}
            />
          </FinanceCard>
        ))}
      </FinanceColumnLayout>
      <FinanceColumnLayout grid="1fr 1fr">
        <FinanceCard dates title="Revenues by Vehicles">
          <NumberOnlyList list={RevenueList} />
        </FinanceCard>
        <FinanceCard dates title="Top 5 Customers">
          <NumberOnlyList list={RevenueList} />
        </FinanceCard>
      </FinanceColumnLayout>
    </div>
  );
};

export default Overview;


