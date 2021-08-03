import React from "react";
import DateToggleButtons from "../DateToggleButtons/DateToggleButtons";
import DataListHeader from "./components/DataListHeader/DataListHeader";
import DataListHeightSelect from "./components/DataListHeightSelect/DataListHeightSelect";
import DataListPagination from "./components/DataListPagination/DataListPagination";
import DataListTable from "./components/DataListTable/DataListTable";
import "./styles.css";
const DataList = () => {
  return (
    <div>
      <DataListHeader />
      <DataListExtras>
        <DateToggleButtons white />
      </DataListExtras>
      <DataListTable/>
      <DataListFooter>
        <DataListPagination />
        <DataListHeightSelect />
      </DataListFooter>
    </div>
  );
};

export default DataList;

const DataListExtras = ({ children }) => {
  return <div className="dataListExtras">{children}</div>;
};
const DataListFooter = ({ children }) => {
  return <div className="dataListFooter">{children}</div>;
};
