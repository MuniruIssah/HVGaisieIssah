import React, { useState } from "react";
import { Modal } from "reactstrap";
import "./styles.css";
const Refund = () => {
  const [showRefundModal, setShowRefundModal] = useState(false);

  return (
    <>
      <button className="refundButton">Refund</button>
      <Modal
        isOpen={showRefundModal}
        centered
        toggle={() => {
          setShowRefundModal((prevState) => !prevState);
        }}
      ></Modal>
    </>
  );
};

export default Refund;
