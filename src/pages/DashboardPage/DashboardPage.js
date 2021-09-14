import React from "react";
import { DateRange } from "react-date-range";
import logo from "./../../assets/logo.svg";
import DashBoardCard from "./components/DashboardCard/DashboardCard";
import TwoColumnLayout from "./sectionLayouts/TwoColumnLayout/TwoColumnLayout";
import "./styles.css";
import NumberOnlyList from "./components/ItemsList/NumberOnlyList/NumberOnlyList";
import ImageOnlyList from "./components/ItemsList/ImageOnlyList/ImageOnlyList";
import ComplexList from "./components/ItemsList/ComplexList/ComplexList";
import LabelAndValueStrip from "./components/LabelAndValueStrip/LabelAndValueStrip";
import LabelAndValue from "./components/LabelAndValue/LabelAndValue";
import HVChartComponent from "./components/HVChartComponent/HVChartComponent";
import {
  dummyRevenueList,
  labelandValue,
  labelandValue2,
  NewCustomers,
  TopSixProducts,
  topThreeVehicles,
} from "./DashboardUtils";
const DashboardPage = () => {
  return (
    <div className="dashboardPage">
      <h1>Dashboard</h1>
      <TwoColumnLayout grid="1fr 1fr">
        <DashBoardCard dates dateToday={true}>
          <LabelAndValueStrip list={labelandValue} />
        </DashBoardCard>
        <DashBoardCard>
          <LabelAndValueStrip
            list={labelandValue2}
            style={{ justifyContent: "flex-start" }}
            bordered
          />
        </DashBoardCard>
      </TwoColumnLayout>
      <DashBoardCard flex={1} largeHeader title="Revenue Growth" dates>
        <HVChartComponent />
      </DashBoardCard>
      <TwoColumnLayout grid="1fr 2fr">
        <DashBoardCard scroll title="New Customers">
          <ImageOnlyList list={NewCustomers} />
        </DashBoardCard>
        <DashBoardCard scroll title="Top 6 Products">
          <ComplexList list={TopSixProducts} />
        </DashBoardCard>
      </TwoColumnLayout>
      <TwoColumnLayout grid="1fr 1fr">
        <DashBoardCard dates scroll title="Revenues by Districts">
          <NumberOnlyList list={dummyRevenueList} />
        </DashBoardCard>
        <DashBoardCard
          dates
          title="Top 3 Vehicles"
          scroll
          style={{ justifyContent: "flex-start" }}
        >
          <div className="topThreeLabels">
            {topThreeVehicles.map((item) => (
              <div className="topThreeLabel">
                <span>{item.name}</span>
                <span style={{color:item.color}}>{item.price}</span>
              </div>
            ))}
          </div>
          <HVChartComponent multi height="120px" />
        </DashBoardCard>
      </TwoColumnLayout>
    </div>
  );
};

export default DashboardPage;

// const handleSelect=(ranges)=>{
//   console.log(ranges);
//   // {
//   //   selection: {
//   //     startDate: [native Date Object],
//   //     endDate: [native Date Object],
//   //   }
//   // }
// }
// const selectionRange = {
//   startDate: new Date(),
//   endDate: new Date(),
//   key: "selection",
// };
/* <DateRange ranges={[selectionRange]} onChange={handleSelect} /> */
