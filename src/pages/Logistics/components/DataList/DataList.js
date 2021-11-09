import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import DateToggleButtons from "../DateToggleButtons/DateToggleButtons";
import DataListHeader from "./components/DataListHeader/DataListHeader";
import DataListHeightSelect from "./components/DataListHeightSelect/DataListHeightSelect";
import DataListPagination from "./components/DataListPagination/DataListPagination";
import DataListTable from "./components/DataListTable/DataListTable";
import "./styles.css";
const DataList = ({children,allowSelect,filters,style}) => {
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <div style={{...style}}>
      <DataListHeader filters={filters} />
      <DataListExtras>
        {/* <DateToggleButtons white /> */}
        {/* <AddUserButton path={`${path}/add`} />
         */}
         {children}
      </DataListExtras>
      <DataListTable allowSelect={allowSelect} />
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

export const AddDriverButton = ({ path }) => {
  const history = useHistory();
  return (
    <button onClick={() => history.push(path)} className="addNewUser">
      <FontAwesomeIcon icon={faPlus} /> <span>Add New User</span>
    </button>
  );
};
