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
          padding: "2rem 2rem",
        }}
      >
        <span
          style={{
            color: "#3D4356",
            display: "block",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          You are about to initiate a refund for <br /> order{" "}
          <b>(475) 953-9876</b>
        </span>
        <RefundSummary />
        <RefundTextArea />
      </ModalBody>
    </form>
  );
};

export default RefundForm;

const RefundSummary = () => {
  return (
    <div className="refundSummary">
      <span>Summary</span>
      <div>
        <span>Items SubTotal</span>
        <span></span>
      </div>
      <RefundSummaryLabelAndValue label={"Items SubTotal"} value={100} />
      <div>
        <span>Shipping</span>
        <span></span>
      </div>
      <div>
        <span>Tax</span>
        <span></span>
      </div>
    </div>
  );
};

const RefundSummaryLabelAndValue = ({ label, value }) => {
  return (
    <div>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
};

const RefundTextArea = () => {
  return (
    <div className="refundTextArea">
      <span style={{ fontSize: 12, color: "#8892A2" }}>Reason for refund</span>
      <textarea></textarea>
    </div>
  );
};
