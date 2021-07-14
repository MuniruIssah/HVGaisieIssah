import React, { useState } from "react";
import { Progress} from "reactstrap";
import "./styles.css";
import { InformationCircle } from "./subComponents/InformationCircle";


const instructions = [
  "Use at least 8 characters.",
  "Besides letters, include at least a number or symbol (!@#$%^&*-_+=).",
  "Password is case sensitive.",
];

export const InputProgress = ({percent,strength}) => {

  return (
    <div className="progressWrapper">
      <div className="innerProgressWrapper">
        <Progress value={percent} style={{ width: "100%" }} />
        <InformationCircle instructions={instructions}/>
      </div>
      <div className="progressAlertStrip">
        <label className="light progressAlert">Password Strength: </label>{" "}
        <label className="progressAlert">{strength}</label>
      </div>
    </div>
  );
};
