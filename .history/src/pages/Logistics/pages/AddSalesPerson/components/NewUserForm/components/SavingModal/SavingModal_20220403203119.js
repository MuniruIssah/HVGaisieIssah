import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import loading from "../../../../../../assets/loading.svg";
import "./styles.css";
import { Modal, ModalBody, ModalHeader, ModalFooter, Input } from "reactstrap";
const SavingModal = ({ visible, setVisible }) => {
  return (
    <Modal
      isOpen={visible}
      centered
      toggle={() => setVisible(false)}
      style={{ width: 404 }}
    >
      <SavingLoader />
      {/* <UnsavedChanges setVisible={setVisible} /> */}
    </Modal>
  );
};

export default SavingModal;

const CustomModalFooter = ({ toggle }) => {
  return (
    <div
      className="addUserButtons"
      style={{ justifyContent: "center", marginBottom: 40 }}
    >
      <button type="button" onClick={toggle} className="addUserCancel">
        Yes go back
      </button>
      <button className="addUserSave">No save Changes</button>
    </div>
  );
};

const UnsavedChanges = ({ setVisible }) => {
  return (
    <>
      <ModalHeader
        className="text-center"
        style={{ justifyContent: "center", background: "#F4F5F7" }}
      >
        <span style={{ fontWeight: "900", color: "#040A1D" }}>
          {" "}
          Unsaved Changes
        </span>
      </ModalHeader>
      <ModalBody
        style={{
          textAlign: "center",
          background: "#F4F5F7",
        }}
      >
        <div style={{ padding: "2.5rem 0rem" }}>
          <p>You haven’t saved your changes.</p>
          <p className="bolder">Are you sure you want to go back?</p>
        </div>
        <CustomModalFooter toggle={() => setVisible(false)} />
      </ModalBody>
    </>
  );
};

const SavingLoader = () => {
  return (
    <ModalBody
      style={{
        textAlign: "center",
        background: "#F4F5F7",
      }}
    >
      <div className="savingLoaderWrapper" style={{}}>
        <span>Saving New User</span>
        <div
          className="savingLoader"
          style={{ backgroundImage: `url(${loading})` }}
        ></div>
      </div>
    </ModalBody>
  );
};
