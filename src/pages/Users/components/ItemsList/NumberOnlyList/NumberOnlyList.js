import React from "react";
import "./styles.css";
const NumberOnlyList = ({ list }) => {
  return (
    <ul className="numberOnlyList">
      {list.map((item) => (
        <li><span>{item.title}</span><span className="moneySection">{item.title}</span></li>
      ))}
    </ul>
  );
};

export default NumberOnlyList;
