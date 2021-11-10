import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles.css";
import { ModalBody, ModalHeader, ModalFooter, Input } from "reactstrap";
import { sampleItemsList } from "../../../../../logisticsUtils";
const Step1 = ({ handleStep }) => {
  return (
    <>
      <ModalHeader className="text-center" style={{ justifyContent: "center" }}>
        <span> Add Item</span>
      </ModalHeader>
      <ModalBody>
        <SearchForItem />
        <ItemsList handleStep={handleStep} />
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

const ItemsList = ({ handleStep }) => {
  return (
    <div className="logisticsSearchList">
      {sampleItemsList.map((item, index) => (
        <LogisticsSearchListItem
          {...item}
          key={index}
          handleStep={handleStep}
        />
      ))}
    </div>
  );
};

const LogisticsSearchListItem = ({
  name = `Caution Tape 3"X 300' Barrier 16100`,
  stock = "Out of stock",
  profile = "https://via.placeholder.com/800",
  active,
  handleStep,
}) => {
  return (
    <div
      className={`item ${active ? "active" : ""}`}
      onClick={() => {
        stock ? handleStep(2) : handleStep(3);
      }}
    >
      <div
        className="profile"
        style={{ backgroundImage: `url(${profile})` }}
      ></div>
      <div className="detailSection">
        <span>{name}</span>
        <span className={`${stock ? "" : "out"}`}>
          {stock ? `${stock}-Available` : "Out of Stock"}
        </span>
      </div>
    </div>
  );
};
