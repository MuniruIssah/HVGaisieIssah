import React from "react";
import DescriptionStrip from "../../../component/DescriptionStrip/descriptionStrip";
import { BigCheck } from "./bigCheck";

const SuccessContent = () => {
  return (
    <>
      <BigCheck />
      <span className="bolder formHeader successHeader" style={{fontFamily: "'Mulish', sans-serif"}}>Password Reset Successful</span>
      <p className='successDescription'>You have successfully reset your password for your Hope Voice account</p>
      <button className="button">Go to Dashboard</button>
    </>
  );
};

export default SuccessContent;
