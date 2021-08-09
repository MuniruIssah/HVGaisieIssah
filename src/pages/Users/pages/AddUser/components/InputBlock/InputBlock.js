import React,{useState} from "react";
import "./styles.css"
const InputBlock = ({ label = "First Name", type = "text" }) => {
  const [labelClass, setLabelClass] = useState("");
  const [value, setValue] = useState("");
  const showLabel = () => setLabelClass("show");
  const hideLabel = () => (value.length > 0 ? null : setLabelClass(""));

  return (
    <div className="inputBlock">
      <label className={`inputBlockLabel ${labelClass}`}>{label}</label>
      <input
        type={type}
        onFocus={showLabel}
        onBlur={hideLabel}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={label}
      />
    </div>
  );
};

export default InputBlock;
