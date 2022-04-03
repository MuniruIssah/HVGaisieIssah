import React, { useState } from "react";
import { Modal } from "reactstrap";
import "./styles.css";
const Refund = () => {
  const [showRefundModal, setShowRefundModal] = useState(false);
  const toggleRefundModal = () => setShowRefundModal((prevState) => !prevState);
  return (
    <>
      <button className="refundButton" onClick={toggleRefundModal}>
        Refund
      </button>
      <Modal
        isOpen={showRefundModal}
        centered
        toggle={toggleRefundModal}
      ></Modal>
    </>
  );
};

export default Refund;
