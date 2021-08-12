import React from "react";
import { Col, Row } from "reactstrap";
import { BackHeader } from "../BackHeader/backHeader";
import "./styles.css";

const GreyForm = (props) => {
  return (
    <div className="greyForm" style={{...props.style}}>
      {props.header && <BackHeader text={props.header} />}
      {props.children}
    </div>
  );
};

export default GreyForm;
