import React from "react";
import "./styles.css";
const LabelAndValue = ({ label, value, green, bordered, flex }) => {
  return (
    <div className="labelAndValue">
      <label className="LAVlabel">{label}</label>
      <span
        className="LAVvalue"
        style={{
          color: green ? "#38C985" : "#040A1D",
          borderRight: bordered ? "1px solid grey" : "none",
          flex: flex,
        }}
      >
        {value}
      </span>
    </div>
  );
};

export default LabelAndValue;
