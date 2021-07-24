import React from "react";
import "./styles.css";
const DateToggleButtons = ({ dateClasses }) => {
  return (
    <div className="dateToggleButtons">
      {dateClasses.map((dateClass,index) => (
        <DateToggleButton key={index} title={dateClass.title} active={dateClass.active} />
      ))}
    </div>
  );
};

export default DateToggleButtons;

const DateToggleButton = ({ title,active }) => {
  
  return <button className={`dateToggleButton ${active?"active":""}`}>{title}</button>;
};
