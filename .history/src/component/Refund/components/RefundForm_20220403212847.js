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

      <RefundSummaryLabelAndValue label={"Items SubTotal"} value={100} />
      <RefundSummaryLabelAndValue label={"Shipping"} value={100} />
      <RefundSummaryLabelAndValue label={"Tax"} value={0} />
    </div>
  );
};

const RefundSummaryLabelAndValue = ({ label, value }) => {
  return (
    <div className="refundSummaryLabelAndValue">
      <span style={{ fontSize: 12 }}>{label}</span>
      <span style={{ fontSize: 14 }}>₵{value}</span>
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
