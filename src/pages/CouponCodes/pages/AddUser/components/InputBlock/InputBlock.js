import React, { useState } from "react";
import "./styles.css";
const InputBlock = ({
  label = "First Name",
  type = "text",
  onChange,
  value,
  style
}) => {
  const [labelClass, setLabelClass] = useState("");
  const [val, setVal] = useState(value);
  const showLabel = () => setLabelClass("show");
  const hideLabel = () => (val.length > 0 ? null : setLabelClass(""));

  const handleChange = (e) => {
    setVal(e.target.value);
    const newLabel = label.toLowerCase().replace(" ", "_");
    onChange(e.target.value)
  };
  return (
    <div className="inputBlock" style={{...style}}>
      <label className={`inputBlockLabel ${labelClass}`}>{label}</label>
      <input
        type={type}
        onFocus={showLabel}
        onBlur={hideLabel}
        value={val?val:null}
        onChange={(e) => handleChange(e)}
        placeholder={val?val:label}
      />
    </div>
  );
};

export default InputBlock;
