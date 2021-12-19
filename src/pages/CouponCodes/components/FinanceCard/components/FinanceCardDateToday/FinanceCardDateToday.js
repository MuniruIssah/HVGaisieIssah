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
          <hr style={{ border: "1px solid #E3E7ED" }} />
        </div>
      )}
    </>
  );
};

export default FinanceCardDateToday;
