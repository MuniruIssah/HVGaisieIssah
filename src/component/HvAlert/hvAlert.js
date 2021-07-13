import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { Alert } from "reactstrap";
const AlertStyles = {
  fontSize: 13,
  padding: "7px 0px",
  background: "transparent",
  border: "none",
  color: " #FF4127",
};
export const HvAlert = ({ message }) => {
  return (
    <Alert color="danger" style={AlertStyles}>
      <FontAwesomeIcon
        icon={faExclamationTriangle}
        style={{ marginRight: 8 }}
      />
      {message}
    </Alert>
  );
};
