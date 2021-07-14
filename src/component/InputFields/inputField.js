import React, { useEffect } from "react";
import { Input } from "reactstrap";
import PasswordField from "./PasswordField/passwordField";
import PhoneNumberInput from "./PhoneNumberInput/phoneNumberInput";
import  NumberCodes from "./NumberCodes.js/numberCodes";
import "./styles.css";
const InputField = ({ label, onChange, onSelect, inputType }) => {
  return (
    <div className="inputField">
      
      <label>{label}</label>
      {inputType === "phone_number" && (
        <PhoneNumberInput onChange={onChange} onSelect={onSelect} />
      )}
      {inputType === "pass_word" && <PasswordField onChange={onChange} />}
      {inputType === "codes" && <NumberCodes onChange={onChange} /> }
    </div>
  );
};

export default InputField;
