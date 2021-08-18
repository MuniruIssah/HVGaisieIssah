import React from "react";
import "./styles.css";
const FinanceCardDateToday = ({ dateToday }) => {
  return (
    <>
      {dateToday && (
        <div className="dashboardCardDateToday">
          <span className="todaysDateSpan">
            {new Date().toString().slice(0, 15)}
          </span>
        </div>
      )}
    </>
  );
};

export default FinanceCardDateToday;
