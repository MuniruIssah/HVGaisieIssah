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
    return <RefundForm />;
  }, [loading, success]);

  const handleRefundSubmit = async (e) => {
    e.preventDefault();
    await setLoading(true);
    await setTimeout(() => {}, 2000);
    await setLoading(false);
    setSuccess(true);
  };
  return (
    <>
      <button className="refundButton" onClick={toggleRefundModal}>
        Refund
      </button>
      <Modal
        className="refundModal"
        style={{ width: loading || success ? 350 : 500 }}
        isOpen={showRefundModal}
        centered
        toggle={toggleRefundModal}
      >
        {display}
      </Modal>
    </>
  );
};

export default Refund;
