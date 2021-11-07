import React from "react";
import { CustomDateRangePicker } from "../../../../../Test";
import DateToggleButtons from "../../../DateToggleButtons/DateToggleButtons";
import "./styles.css";

const DashboardCardHeader = ({ title, dates, large }) => {
  return (
    <header className="dashboardCardHeader">
      {title && (
        <span
          className={`dashboardCardHeaderTitle ${large ? "bigHeader" : ""}`}
        >
          {title}
        </span>
      )}
      <div
        style={{
          width: "300px",
          display: "flex",
          justifyContent: "flex-start",
          zIndex: 10,
        }}
      >
        {dates && <CustomDateRangePicker />}
      </div>
    </header>
  );
};

export default DashboardCardHeader;
