import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import stockImage from "../../../../../assets/stockImage.png";
import "./styles.css";
import { ModalBody, ModalHeader, ModalFooter, Input } from "reactstrap";

const Step3 = ({ handleStep }) => {
  return (
    <>
      <ModalHeader
        className="text-center"
        style={{ justifyContent: "center", backgroundColor: "#F4F5F7" }}
      >
        <span>Out of stock</span>
      </ModalHeader>
      <ModalBody style={{ backgroundColor: "#F4F5F7" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            className="itemImageOOS"
            style={{ background: `url(${stockImage})` }}
          ></div>

          <div>
            <p className="formDescriptionStrip">This Item is out of stock.</p>
            <p
              className="formDescriptionStrip bolder"
              style={{ textAlign: "center" }}
            >
              Please choose another item or Update
              <br /> inventory to continue.
            </p>
          </div>
        </div>
        <CustomModalFooter
          update={() => handleStep(4)}
          change={() => handleStep(1)}
        />
      </ModalBody>
    </>
  );
};

export default Step3;

const CustomModalFooter = ({ update, change }) => {
  return (
    <div
      className="addUserButtons"
      style={{ justifyContent: "center", margin: "1.5rem 0rem" }}
    >
      <button
        type="button"
        onClick={() => {
          update();
        }}
        className="addUserCancel"
        style={{ width: 160 }}
      >
        Update Inventory
      </button>
      <button
        onClick={() => {
          change();
        }}
        className="addUserSave"
      >
        Choose Another Item
      </button>
    </div>
  );
};
