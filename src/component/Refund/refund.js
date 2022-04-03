import React, { useMemo, useState } from "react";
import { Modal } from "reactstrap";
import Loading from "./components/Loading";
import RefundForm from "./components/RefundForm";
import Success from "./components/Success";
import "./styles.css";
const Refund = () => {
  const [showRefundModal, setShowRefundModal] = useState(false);
  const toggleRefundModal = () => setShowRefundModal((prevState) => !prevState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [state, setState] = useState({
    reason: "",
  });
  const display = useMemo(() => {
    if (loading) {
      return <Loading />;
    }
    if (success) {
      return <Success />;
    }
    return <Success />;
  }, [loading, success]);

  const handleRefundSubmit = () => {};
  return (
    <>
      <button className="refundButton" onClick={toggleRefundModal}>
        Refund
      </button>
      <Modal isOpen={showRefundModal} centered toggle={toggleRefundModal}>
        {display}
      </Modal>
    </>
  );
};

export default Refund;
