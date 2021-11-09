import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import "./styles.css";
import { Modal, ModalBody, ModalHeader, ModalFooter, Input } from "reactstrap";
const Step2 = ({ handleRevert, setVisible }) => {
  return (
    <>
      <ModalHeader className="text-center" style={{ justifyContent: "center" }}>
        <span style={{ fontWeight: "900", color: "#040A1D" }}>
          {" "}
          Assign New Sales Person
        </span>
      </ModalHeader>
      <ModalBody style={{ textAlign: "center" }}>
        <div style={{ margin: "2rem 0rem 2.5rem" }}>
          <span className="bolder">Lawrence Ati-Zigi</span>&nbsp;
          <span>is already assigned to A2 - (GA-256-12)</span>
          <p className="bolder">
            Are you sure you want to reassign this driver ?
          </p>
        </div>
        <CustomModalFooter
          handleRevert={handleRevert}
          hideModal={() => setVisible(false)}
        />
      </ModalBody>
    </>
  );
};

export default Step2;
const CustomModalFooter = ({ handleRevert, hideModal }) => {
  return (
    <div
      className="addUserButtons"
      style={{ justifyContent: "center", marginBottom: "1.5rem" }}
    >
      <button
        type="button"
        onClick={() => {
            hideModal();
            handleRevert();
        }}
        className="addUserCancel"
      >
        No Cancel
      </button>
      <button className="addUserSave">Yes Reassign</button>
    </div>
  );
};
