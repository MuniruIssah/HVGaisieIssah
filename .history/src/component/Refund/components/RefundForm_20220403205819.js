import React from "react";
import { ModalBody, ModalHeader, ModalFooter, Input } from "reactstrap";

const RefundForm = ({ order }) => {
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
      >
        <span
          style={{ color: "#3D4356", display: "block", textAlign: "center" }}
        >
          You are about to initiate a refund for <br /> order (475) 953-9876
        </span>
      </ModalBody>
    </form>
  );
};

export default RefundForm;

const RefundTextArea = () => {
  return (
    <div className="refundTextArea">
      <span style={{ fontSize: 12, color: "#8892A2" }}>Reason for refund</span>
      <textarea></textarea>
    </div>
  );
};
