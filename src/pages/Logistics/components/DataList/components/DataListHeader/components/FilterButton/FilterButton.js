import React from "react";
import "./styles.css"
const FilterButton = ({ label,active,onClick }) => {
  return <button onClick={onClick} className={`tableFilterButton ${active?"tFBactive":""}`}>{label}</button>;
};

export default FilterButton;
