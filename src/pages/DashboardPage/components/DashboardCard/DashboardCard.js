import React from "react";
import DateToggleButtons from "../DateToggleButtons/DateToggleButtons";
import "./styles.css";
import DashboardCardHeader from "./components/DashboardCardHeader/DashboardCardHeader";
import DashboardCardDateToday from "./components/DashboardCardDateToday/DashboardCardDateToday";

const DashBoardCard = ({
  dateToday,
  title,
  dates,
  scroll,
  style,
  largeHeader,
  children,
}) => {
  return (
    <div className="dashboardCard">
      <div className="dashboardCardHeaderSection">
        <DashboardCardHeader title={title} dates={dates} large={largeHeader} />
        <DashboardCardDateToday dateToday={dateToday} />
      </div>
      {scroll ? <div style={{height:'100%',overflow:'scroll'}}>{children}</div> : <>{children}</>}
    </div>
  );
};

export default DashBoardCard;
