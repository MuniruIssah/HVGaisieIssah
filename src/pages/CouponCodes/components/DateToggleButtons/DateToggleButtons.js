import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const DateToggleButtons = ({ white }) => {
  const DateRanges = () => {
    return (
      <div className="dateRange">
        <FontAwesomeIcon icon={faCalendar} style={{ fontSize: 16 }} />
        <span>01 Jan</span>
        <FontAwesomeIcon icon={faArrowRight} />
        <span>01 Feb</span>
      </div>
    );
  };
  const DateClasses = [
    {
      title: "Today",
      active: true,
    },
    {
      title: "1W",
    },
    {
      title: "1M",
    },
    {
      title: <DateRanges />,
    },
  ];
  return (
    <div className="dateToggleButtons">
      {DateClasses.map((dateClass, index) => (
        <DateToggleButton
          key={index}
          white={white ? true : false}
          title={dateClass.title}
          active={dateClass.active}
        />
      ))}
    </div>
  );
};

export default DateToggleButtons;

const DateToggleButton = ({ title, active, white }) => {
  return (
    <button
      className={` ${white ? "whiteDateToggleButton" : "dateToggleButton"}  ${
        active ? "active" : ""
      }`}
    >
      {title}
    </button>
  );
};
