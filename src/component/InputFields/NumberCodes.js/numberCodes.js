import React from "react";
import { Input } from "reactstrap";
import VerificationInput from "react-verification-input";
import "./styles.css";
const NumberCodes = ({ onChange }) => {
  const handleChange = (e) => {
    onChange(e);
  };
  return (
    <div className="numberCodesWrap">
      <VerificationInput
        length={4}
        onChange={handleChange}
        validChars="0-9"
        placeholder=""
        removeDefaultStyles
        classNames={{
          container: "container",
          character: "character",
          characterInactive: "character--inactive",
          characterSelected: "character--selected",
        }}
      />
    </div>
  );
};

export default NumberCodes;
