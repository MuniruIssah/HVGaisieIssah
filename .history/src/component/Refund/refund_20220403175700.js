import React, { useState } from "react";
import "./styles.css";
const Refund = () => {
  const [showRefundModal, setShowRefundModal] = useState(initialState);
  return (
    <>
      {" "}
      <button className="refundButton">Refund</button>
    </>
  );
};

export default Refund;
