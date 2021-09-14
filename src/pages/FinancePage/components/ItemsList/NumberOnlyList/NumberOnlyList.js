import React from "react";
import "./styles.css";
const NumberOnlyList = ({ list }) => {
  return (
    <ul className="numberOnlyList">
      {list.map((item) => (
        <li><span>{item.name}</span><span className="moneySection">{item.cash}</span></li>
      ))}
    </ul>
  );
};

export default NumberOnlyList;
