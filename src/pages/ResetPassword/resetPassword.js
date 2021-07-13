import React, { useState } from "react";
import "./styles.css";
import HvHeader from "./../../component/HVHeader/hvHeader";
import GreyForm from "../../component/GreyForm/greyForm";
import InputField from "../../component/InputFields/inputField";
import { Alert } from "reactstrap";
import { handleFormSubmission } from "./../../utils/functions";
import { HvAlert } from "../../component/HvAlert/hvAlert";
import { WhiteCenterLayout } from "../../layouts/centerLayout";

const ResetPasswordForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberCode, setPhoneNumberCode] = useState("+233");
  const [alertMessage, setAlertMessage] = useState("");

  //Submit Form
  const submitForm = (e) => {
    e.preventDefault();
    let aMessage = handleFormSubmission(phoneNumber, phoneNumberCode);
    setAlertMessage(aMessage);
  };

  //Handling Phone Number Change
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    setAlertMessage("");
  };

  //Handle Country Code Change
  const handlePhoneNumberCodeChange = (e) => {
    setPhoneNumberCode(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form className="resetPasswordForm" onSubmit={submitForm}>
      <span className="bolder formHeader">Reset Password</span>
      <div className="formDescriptionStrip">
        <span className="description formDescription">
          Enter the phone number associated with your account and we'll send you
          a code to reset your password.
        </span>
      </div>
      <InputField
        label="Phone Number"
        onChange={handlePhoneNumberChange}
        onSelect={handlePhoneNumberCodeChange}
      />
      {alertMessage.length > 0 && <HvAlert message={alertMessage} />}

      <button className="button" type="submit">
        Continue
      </button>
      <a href="#" className="returnLink">
        Return to sign in
      </a>
    </form>
  );
};

const ResetPassword = () => {
  return (
    <WhiteCenterLayout>
      <GreyForm>
        <ResetPasswordForm />
      </GreyForm>
    </WhiteCenterLayout>
  );
};

export default ResetPassword;
