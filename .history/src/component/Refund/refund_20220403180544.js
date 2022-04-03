import React, { useMemo, useState } from "react";
import { Modal } from "reactstrap";
import Loading from "./components/Loading";
import Success from "./components/Success";
import "./styles.css";
const Refund = () => {
  const [showRefundModal, setShowRefundModal] = useState(false);
  const toggleRefundModal = () => setShowRefundModal((prevState) => !prevState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const display = useMemo(() => {
    if (loading) {
      return <Loading />;
    }
    if (success) {
      <Success />;
    }
  }, [loading, success]);
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
