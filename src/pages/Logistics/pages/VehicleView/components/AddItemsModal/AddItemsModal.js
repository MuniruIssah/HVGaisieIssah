import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useMemo, useEffect } from "react";
import "./styles.css";
import { Modal } from "reactstrap";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
const AddItemsModal = ({ visible, setVisible }) => {
  const [step, setStep] = useState(1);
  const display = useMemo(() => {
    switch (step) {
      case 1:
        return <Step1 handleStep={setStep} />;
        break;
      case 2:
        return <Step2 handleStep={setStep} setVisible={setVisible} />;
        break;
      case 3:
        return <Step3 handleStep={setStep} setVisible={setVisible}  />;
        break;
      case 4:
        return <Step4 handleStep={setStep} setVisible={setVisible}  />;
        break;
    }
  }, [step]);
  return (
    <Modal isOpen={visible} centered toggle={() => {setVisible(false);setStep(1)}}>
      {display}
    </Modal>
  );
};

export default AddItemsModal;
