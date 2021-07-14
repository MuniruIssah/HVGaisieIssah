import React from "react";
import DescriptionStrip from "../../../component/DescriptionStrip/descriptionStrip";
import { BigCheck } from "./bigCheck";

const SuccessContent = () => {
  return (
    <>
      <BigCheck />
      <span className="bolder formHeader successHeader">Password Reset Successful</span>
      <DescriptionStrip description="You have successfully reset your password for your Hope Voice account" type='successDescription' />
      <button className="button">Continue</button>
    </>
  );
};

export default SuccessContent;
