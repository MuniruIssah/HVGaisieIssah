import React from "react";
import ExportButton from "./components/ExportButton/ExportButton";
import FilterButton from "./components/FilterButton/FilterButton";
import SearchBar from "./components/SearchBar/SearchBar";
import "./styles.css";
const dummyList = [
  {
    label: "All",
    active: true,
  },
  {
    label: "Paid",
  },
  {
    label: "Cancelled",
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
      <ExportButton />
    </div>
  );
};
