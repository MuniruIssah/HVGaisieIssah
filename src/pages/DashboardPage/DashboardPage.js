import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
const DateRanges = () => {
  return (
    <div className="dateRange">
      <FontAwesomeIcon icon={faCalendar} style={{ fontSize: 16 }} />
      <span>01 Jan</span>
      <FontAwesomeIcon icon={faArrowRight} />
      <span>01 Feb</span>
    </div>
  );
};
const DateClasses = [
  {
    title: "Today",
    active: true,
  },
  {
    title: "1W",
  },
  {
    title: "1M",
  },
  {
    title: <DateRanges />,
  },
];
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
const ImageList = [
  {
    title: "Verdeon Ventures",
    name: "Yakubu Issifu",
    image: logo,
  },
  {
    title: "All Time Shopping Center",
    name: "Yakubu Issifu",
    image: logo,
  },
  {
    title: "Marie Shopping Mall",
    name: "Yakubu Issifu",
    image: logo,
  },
  {
    title: "Marie Shopping Mal",
    name: "Yakubu Issifu",
    image: logo,
  },
];
const CompList = [
  {
    title: "Hammer Tacker Staple Gun Arrow Ht50Ds",
    noOfSold: 132,
    price: "₵10,311.00",
    image: logo,
  },
  {
    title: `Caution Tape 3"X 300' Barrier 16100`,
    noOfSold: 442,
    price: "₵10,311.00",
    image: logo,
  },
  {
    title: `Hinge Broad 3" Zinc N195-651`,
    noOfSold: 432,
    price: "₵10,311.00",
    image: logo,
  },
  {
    title: "Hammer Tacker Staple Gun Arrow Ht50Ds",
    noOfSold: 132,
    price: "₵10,311.00",
    image: logo,
  },
  {
    title: `Caution Tape 3"X 300' Barrier 16100`,
    noOfSold: 442,
    price: "₵10,311.00",
    image: logo,
  },
  {
    title: `Hinge Broad 3" Zinc N195-651`,
    noOfSold: 432,
    price: "₵10,311.00",
    image: logo,
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
    label: "Total Customers",
    value: "203",
  },
];
const labelandValue2 = [
  {
    label: "Total Products",
    value: "45",
    bordered: true,
  },
  {
    label: "Total Drivers",
    value: "34",
  },
];
const DashboardPage = () => {
  return (
    <div className="dashboardPage">
      <h1>Dashboard</h1>
      <TwoColumnLayout grid="1fr 1fr">
        <DashBoardCard dates={DateClasses} dateToday={true}>
          <LabelAndValueStrip list={labelandValue} />
        </DashBoardCard>
        <DashBoardCard>
          <LabelAndValueStrip list={labelandValue2} />
        </DashBoardCard>
      </TwoColumnLayout>
      <DashBoardCard
        flex={1}
        largeHeader
        title="Revenue Growth"
        dates={DateClasses}
      >
        <HVChartComponent />
      </DashBoardCard>
      <TwoColumnLayout grid="1fr 2fr">
        <DashBoardCard title="New Customers">
          <ImageOnlyList list={ImageList} />
        </DashBoardCard>
        <DashBoardCard title="Top 6 Products">
          <ComplexList list={CompList} />
        </DashBoardCard>
      </TwoColumnLayout>
      <TwoColumnLayout grid="1fr 1fr">
        <DashBoardCard dates={DateClasses} title="Revenues by Districts">
          <NumberOnlyList list={RevenueList} />
        </DashBoardCard>
        <DashBoardCard dates={DateClasses} title="Top 3 Vehicles">
          <HVChartComponent multi />
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
