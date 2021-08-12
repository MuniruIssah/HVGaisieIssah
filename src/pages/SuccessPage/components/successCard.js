import React from "react";
import { Col, Row } from "reactstrap";
import "./styles.css";
const SuccessCard = ({ children }) => {
  return <div className="successWrapper">{children}</div>;
};

export default SuccessCard;
