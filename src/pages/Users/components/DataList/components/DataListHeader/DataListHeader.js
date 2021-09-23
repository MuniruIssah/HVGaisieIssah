import React from "react";
import { IconButton } from "../../../../pages/UserProfile/components/NameAndActionsStrip/components/ActionsStrip/ActionsStrip";
import ExportButton from "./components/ExportButton/ExportButton";
import FilterButton from "./components/FilterButton/FilterButton";
import SearchBar from "./components/SearchBar/SearchBar";
import pdf from "../../../../assets/pdf.svg";
import print from "../../../../assets/print.svg";

import "./styles.css";
const dummyList = [
  {
    label: "All Users",
    active: true,
  },
];
const DataListHeader = () => {
  return (
    <header className="dataListHeader">
      <DataListHeaderFirstSection list={dummyList} />
      <DataListHeaderSecondSection />
    </header>
  );
};

export default DataListHeader;

const DataListHeaderFirstSection = ({ list }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {list.map((item) => (
        <FilterButton key={item.label} {...item} />
      ))}
    </div>
  );
};

const DataListHeaderSecondSection = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: 11 }}>
      <SearchBar />
      <div>
        <IconButton icon={pdf} />
        <IconButton icon={print} />
      </div>
    </div>
  );
};
