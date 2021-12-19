import React from "react";
import "./styles.css"
const FilterButton = ({ label,active }) => {
  return <button className={`tableFilterButton ${active?"tFBactive":""}`}>{label}</button>;
};

export default FilterButton;
