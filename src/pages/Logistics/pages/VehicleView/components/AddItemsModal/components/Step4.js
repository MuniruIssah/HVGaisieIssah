import { BsArrowRight } from "react-icons/bs";
import React, { useRef, useState } from "react";
import drillImage from "../../../../../assets/drillImage.png";
import up from "../../../../../assets/up.svg";
import down from "../../../../../assets/down.svg";
import { ModalBody, ModalHeader, ModalFooter, Input } from "reactstrap";
import "./styles.css";
import { CustomModalNumberInput } from "./Step2";
const Step4 = ({
  image = drillImage,
  name = 'Drill Dewalt 1/2" Hammerdrill Dwd520',
  stock = 25,
  handleStep,
  setVisible,
}) => {
  return (
    <>
      <ModalHeader className="text-center" style={{ justifyContent: "center" }}>
        <span>Update Inventory</span>
      </ModalHeader>
      <ModalBody>
        <div className="addItemWrapper">
          <div
            className="addItemImage"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="updateDetailsSection">
            <span>{name}</span>
            <span>Out of Stock</span>
          </div>
        </div>
        <CustomUpdateInventoryInput />
        <CustomModalFooter
          handleRevert={() => handleStep(1)}
          hideModal={() => {
            setVisible(false);
          }}
        />
      </ModalBody>
    </>
  );
};

export default Step4;

const CustomModalFooter = ({ handleRevert, hideModal }) => {
  return (
    <div
      className="addUserButtons"
      style={{ justifyContent: "flex-end", margin: "1rem 0rem" }}
    >
      <button
        type="button"
        onClick={() => {
          hideModal();
          setTimeout(() => {
            handleRevert();
          }, 1000);
        }}
        className="addUserCancel"
        // style={{ width: 160 }}
      >
        Cancel
      </button>
      <button className="addUserSave" disabled>
        Continue
      </button>
    </div>
  );
};
const CustomUpdateInventoryInput = () => {
  return (
    <div className="customUpdateInventoryInput">
      <div className="updateSection">
        <span className="initialValue">0</span>
        <div className="added">+25</div>
        <div>
          <BsArrowRight style={{ color: "#8892A2", fontSize: 20 }} />
        </div>
        <div className="result">25</div>
      </div>
      <div>
        <div className="addUserButtons" style={{ alignItems: "center" }}>
          <CustomModalNumberInput />
          <button
            className="addUserSave"
            disabled
            style={{ height: 35, padding: "0px 15px" }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
