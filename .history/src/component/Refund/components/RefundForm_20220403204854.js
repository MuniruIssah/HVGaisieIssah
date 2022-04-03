import React from "react";
import { ModalBody, ModalHeader, ModalFooter, Input } from "reactstrap";

const RefundForm = () => {
  return (
    <form className="refundForm">
      <ModalHeader className="text-center" style={{ justifyContent: "center" }}>
        <span> Refund</span>
      </ModalHeader>
      <ModalBody
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 0px",
        }}
      ></ModalBody>
    </form>
  );
};

export default RefundForm;
