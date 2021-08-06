import React from "react";
import LabelAndValue from "../LabelAndValue/LabelAndValue";
import "./styles.css";

const LabelAndValueStrip = ({ list }) => {
  let flexx = 1/list.length;
    console.log(flexx)
  return (
    <div className="labelAndValueStrip">
      {list.map((item) => (
          <>
        <LabelAndValue
            flex={flexx}
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
