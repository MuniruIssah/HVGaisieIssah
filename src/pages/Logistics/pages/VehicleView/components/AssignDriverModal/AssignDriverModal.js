import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
// import "./styles.css";
import { Modal, ModalBody, ModalHeader, ModalFooter, Input } from "reactstrap";
import ReassignModal from "../ReassignModal/ReassignModal";
const AssignDriverModal = ({ visible, setVisible }) => {
  return (
    <Modal isOpen={visible} centered toggle={() => setVisible(false)}>
      <ModalHeader className="text-center" style={{ justifyContent: "center" }}>
        <span style={{ fontWeight: "900", color: "#040A1D" }}>
          {" "}
          Assign New Sales Person
        </span>
      </ModalHeader>
      <ModalBody>
        <SearchForItem />
        <ItemsList hideModal={() => setVisible(false)} />
      </ModalBody>
    </Modal>
  );
};

export default AssignDriverModal;

const SearchForItem = () => {
  const searchBarStyles = {
    height: "100%",
    background: " #F4F5F7",
    fontSize: "14px",
    // marginBottom: "1.5rem",
    // border: "none",
  };
  return (
    <div className="logisticSearch">
      <FontAwesomeIcon className="icon" icon={faSearch} />
      <Input
        type="search"
        style={searchBarStyles}
        className="searchForItem"
        type="search"
        name="searchItem"
        id="exampleSearch"
        placeholder="Search Item"
      />
    </div>
  );
};

const ItemsList = ({ hideModal }) => {
  return (
    <div className="logisticsSearchList">
      {new Array(5).fill(0).map((item, index) => (
        <LogisticsSearchListItem key={index} hideModal={hideModal} />
      ))}
    </div>
  );
};

const LogisticsSearchListItem = ({
  name = `Ibrahim Danlad`,
  assignmentStatus = "Not Assigned",
  profile = "https://via.placeholder.com/800",
  active,
  hideModal,
}) => {
  const [showReassignModal, setShowReassignModal] = useState(false);
  return (
    <>
      <ReassignModal
        visible={showReassignModal}
        setVisible={setShowReassignModal}
      />
      <div
        className={`item ${active ? "active" : ""}`}
        onClick={() => {
       
          setShowReassignModal(true);
            //  hideModal();
        }}
      >
        <div
          className="profile"
          style={{ backgroundImage: `url(${profile})` }}
        ></div>
        <div className="detailSection">
          <span>{name}</span>
          <span>{assignmentStatus}</span>
        </div>
      </div>
    </>
  );
};
