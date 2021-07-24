import React from "react";
import DateToggleButtons from "../../../DateToggleButtons/DateToggleButtons";
import "./styles.css";

const DashboardCardHeader = ({ title, dates, large }) => {
  return (
    <header className="dashboardCardHeader">
      {title && (
        <span className={`dashboardCardHeaderTitle ${large ? "bigHeader" : ""}`}>
          {title}
        </span>
      )}
      {dates && <DateToggleButtons dateClasses={dates} />}
    </header>
  );
};

export default DashboardCardHeader;
