import React, { useState } from "react";
import { Progress } from "reactstrap";
import InputField from "../../component/InputFields/inputField";
import { InputProgress } from "../../component/ProgressBar/inputProgress";
import { HvAlert } from "../../component/HvAlert/hvAlert";
import { WhiteCenterLayout } from "../../layouts/centerLayout";
import {
  handlePasswordRenewal,
  handlePasswordStrength,
} from "../../utils/functions";
import GreyForm from "./../../component/GreyForm/greyForm";
import "./styles.css";
import { useHistory } from "react-router-dom";

const EnterPasswordForm = () => {
  const history=useHistory()
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [strength, setStrength] = useState("");
  const [percent, setPercent] = useState("0");

  const handleSubmit = (e) => {
    e.preventDefault();
    let aMessage = handlePasswordRenewal(password, verifyPassword,strength);
    if (aMessage.status==="Ok") {
      history.push(`/reset_password/success`)
    } else {
      setAlertMessage(aMessage.alertMessage)
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setAlertMessage("");
    let result = handlePasswordStrength(password);
    console.log(result);
    if (e.target.value === "") {
      setPercent("0");
      setStrength("");
     
    } else {
      setPercent(result.progress);
      setStrength(result.strength);
     
    }
  };
  const handleVerificationChange = (e) => {
    setVerifyPassword(e.target.value);
    setAlertMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <span className="bolder formHeader passwordHeader">
        Enter New Password
      </span>
      <InputField
        label="New Password"
        inputType="pass_word"
        onChange={handlePasswordChange}
      />
      <InputProgress percent={percent} strength={strength} />
      <InputField
        label="New Password"
        inputType="pass_word"
        onChange={handleVerificationChange}
      />
      {alertMessage.length > 0 && <HvAlert message={alertMessage} />}
      <button className="button resetButton" type="submit">
        Reset Password
      </button>
    </form>
  );
};

const EnterPassword = () => {
  return (
    <WhiteCenterLayout>
      <GreyForm>
        <EnterPasswordForm />
      </GreyForm>
    </WhiteCenterLayout>
  );
};

export default EnterPassword;
