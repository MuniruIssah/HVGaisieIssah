import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
// import "./styles.css";
import { Modal, ModalBody, ModalHeader, ModalFooter, Input } from "reactstrap";
import { sampleSalesPersons } from "../../../../logisticsUtils";
import ReassignModal from "../ReassignModal/ReassignModal";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
const AssignDriverModal = ({ visible, setVisible,salesPerson,changeSalesPerson }) => {
  const [reassign, setReassign] = useState(false);

  const handleRevert = () => setReassign(false);
  return (
    <Modal isOpen={visible} centered toggle={() => setVisible(false)}>
      {!reassign && (
        <Step1 setVisible={setVisible} reassignSalesPerson={setReassign} />
      )}
      {reassign && <Step2 setVisible={setVisible} handleRevert={handleRevert} />}
    </Modal>
  );
};

export default AssignDriverModal;
