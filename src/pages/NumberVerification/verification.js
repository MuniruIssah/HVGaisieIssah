import React, { useState } from "react";
import GreyForm from "../../component/GreyForm/greyForm";
import { HvAlert } from "../../component/HvAlert/hvAlert";
import { WhiteCenterLayout } from "../../layouts/centerLayout";
import DescriptionStrip from "../../component/DescriptionStrip/descriptionStrip";
import "./styles.css";
import TextAndLink from "../../component/TextAndLink/textAndLink";
import InputField from "../../component/InputFields/inputField";
import { handleCodeVerification } from "../../utils/functions";
import { useHistory, useParams } from "react-router-dom";

const VerificationForm = () => {
  const { number } = useParams();
  const history=useHistory();
  const [code, setCode] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  //handle form submission
  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (code.length < 4) {
      setAlertMessage("The codes are not up to 4");
    } else {
      let aMessage = handleCodeVerification(code);
      if (aMessage.status === "Ok") {
        history.push(`/reset_password/${number}/newPassword`)
      } else {
        setAlertMessage(aMessage.alertMessage);
      }
    }
  };

  const handleNumberCodeChange = (value) => {
    setCode(value);
    setAlertMessage("");
  };
  return (
    <form onSubmit={handleFormSubmission}>
      <span className="bolder formHeader vfHeader">Verification</span>
      <DescriptionStrip
        description="Please enter verification code sent to"
        type="vfLabel"
      >
        <span className="bolder" style={{ display: "block" }}>
          {number ? number : "+233 500 778 291"}
        </span>
      </DescriptionStrip>
      <InputField inputType="codes" onChange={handleNumberCodeChange} />
      {alertMessage.length > 0 && <HvAlert message={alertMessage} />}
      <button
        type="submit"
        className="button"
        style={{ width: "min(300px,100%)" }}
      >
        Continue
      </button>
      <TextAndLink text="Didn't get the code? " link="Resend Code" />
    </form>
  );
};

const Verification = () => {
  return (
    <WhiteCenterLayout>
      <GreyForm header="Change Number">
        <VerificationForm />
      </GreyForm>
    </WhiteCenterLayout>
  );
};

export default Verification;
