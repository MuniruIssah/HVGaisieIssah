import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { ModalBody, ModalHeader, ModalFooter, Input } from "reactstrap";
import { sampleSalesPersons } from "../../../../../logisticsUtils";

const Step1 = ({ setVisible, reassignSalesPerson }) => {
  return (
    <>
      <ModalHeader className="text-center" style={{ justifyContent: "center" }}>
        <span style={{ fontWeight: "900", color: "#040A1D" }}>
          {" "}
          Assign New Sales Person
        </span>
      </ModalHeader>
      <ModalBody>
        <SearchForItem />
        <ItemsList
          reassignSalesPerson={reassignSalesPerson}
          hideModal={() => setVisible(false)}
        />
      </ModalBody>
    </>
  );
};

export default Step1;

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

const ItemsList = ({ reassignSalesPerson, hideModal }) => {
  return (
    <div className="logisticsSearchList">
      {sampleSalesPersons.map((item, index) => (
        <LogisticsSearchListItem
          reassignSalesPerson={reassignSalesPerson}
          key={index}
          hideModal={hideModal}
          {...item}
        />
      ))}
    </div>
  );
};

const LogisticsSearchListItem = ({
  name = `Ibrahim Danlad`,
  assignmentStatus = false,
  profile = "https://via.placeholder.com/800",
  active,
  reassignSalesPerson,
  hideModal,
}) => {
  return (
    <>
      <div
        className={`item ${active ? "active" : ""}`}
        onClick={() => {
          if (assignmentStatus) {
            reassignSalesPerson(true);
          } else {
            hideModal();
          }
        }}
      >
        <div
          className="profile"
          style={{ backgroundImage: `url(${profile})` }}
        ></div>
        <div className="detailSection">
          <span>{name}</span>
          <span>{assignmentStatus ? "Assigned" : "Not Assigned"}</span>
        </div>
      </div>
    </>
  );
};
