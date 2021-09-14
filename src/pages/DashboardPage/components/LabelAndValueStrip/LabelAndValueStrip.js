import React from "react";
import LabelAndValue from "../LabelAndValue/LabelAndValue";
import "./styles.css";

const LabelAndValueStrip = ({ list, style, bordered }) => {
  return (
    <div
      className={`labelAndValueStrip ${bordered ? "bordered" : ""}`}
      style={{ ...style }}
    >
      {list.map((item) => (
        <>
          <LabelAndValue
            label={item.label}
            value={item.value}
            green={item.green}
          />
        </>
      ))}
    </div>
  );
};

export default LabelAndValueStrip;
