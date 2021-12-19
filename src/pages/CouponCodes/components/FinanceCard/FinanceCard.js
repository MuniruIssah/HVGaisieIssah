import React from "react";
import DateToggleButtons from "../DateToggleButtons/DateToggleButtons";
import "./styles.css";
import DashboardCardHeader from "./components/FinanceCardHeader/FinanceCardHeader";
import DashboardCardDateToday from "./components/FinanceCardDateToday/FinanceCardDateToday";

const FinanceCard = (props) => {
  return (
    <div className="financeCard">
     {!props.sideGraph? <FinanceCardBasic {...props}>{props.children}</FinanceCardBasic>:
     <FinanceCardWithSideGraph {...props}>{props.children}</FinanceCardWithSideGraph>
     }
    </div>
  );
};

export default FinanceCard;

const FinanceCardWithSideGraph = ({
  title,
  dates,
  select,
  largeHeader,
  dateToday,
  sideGraph,
  children,
}) => {
  return (
    <div className="financeCardWithSideGraph">
      <div className="leftColumn">
      <div className="dashboardCardHeaderSection">
        <DashboardCardHeader title={title} dates={dates} select={select} large={largeHeader} />
        <DashboardCardDateToday dateToday={dateToday} />
      </div>
      {children}
      </div>
      <div className="rightColumn"> 
        {sideGraph}
      </div>
    </div>
  );
};

const FinanceCardBasic = ({
  children,
  title,
  select,
  dates,
  largeHeader,
  dateToday,
}) => {
  return (
    <>
      <div className="dashboardCardHeaderSection">
        <DashboardCardHeader title={title} dates={dates} select={select} large={largeHeader} />
        <DashboardCardDateToday dateToday={dateToday} />
      </div>
      {children}
    </>
  );
};
