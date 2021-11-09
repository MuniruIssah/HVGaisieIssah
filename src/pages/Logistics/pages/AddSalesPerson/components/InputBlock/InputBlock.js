import React, { useState } from "react";
import "./styles.css";
const InputBlock = ({
  label = "First Name",
  type = "text",
  onChange,
  value,
}) => {
  const [labelClass, setLabelClass] = useState("");
  const [val, setVal] = useState(value);
  const showLabel = () => setLabelClass("show");
  const hideLabel = () => (val.length > 0 ? null : setLabelClass(""));

  const handleChange = (e) => {
    setVal(e.target.value);
    const newLabel = label.toLowerCase().replace(" ", "_");
    onChange(newLabel,e)
  };
  return (
    <div className="inputBlock">
      <label className={`inputBlockLabel ${labelClass}`}>{label}</label>
      <input
        type={`${type}`}
        onFocus={showLabel}
        onBlur={hideLabel}
        value={val}
        onChange={(e) => handleChange(e)}
        placeholder={label}
      />
    </div>
  );
};

export default InputBlock;
