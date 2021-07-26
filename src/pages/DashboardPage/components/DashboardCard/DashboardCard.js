import React from "react";
import DateToggleButtons from "../DateToggleButtons/DateToggleButtons";
import "./styles.css";
import DashboardCardHeader from "./components/DashboardCardHeader/DashboardCardHeader";
import DashboardCardDateToday from "./components/DashboardCardDateToday/DashboardCardDateToday";

const DashBoardCard = ({
  flex,
  dateToday,
  title,
  dates,
  largeHeader,
  children,
}) => {
  return (
    <div className="dashboardCard">
      <div className="dashboardCardHeaderSection">
      <DashboardCardHeader title={title} dates={dates} large={largeHeader} />
      <DashboardCardDateToday dateToday={dateToday} />
      </div>
      {children}
    </div>
  );
};

export default DashBoardCard;
