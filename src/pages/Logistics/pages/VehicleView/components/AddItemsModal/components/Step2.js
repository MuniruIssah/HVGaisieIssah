import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import drillImage from "../../../../../assets/drillImage.png";
import up from "../../../../../assets/up.svg";
import down from "../../../../../assets/down.svg";

import { ModalBody, ModalHeader, ModalFooter, Input } from "reactstrap";

const Step2 = ({
  image = drillImage,
  name = 'Drill Dewalt 1/2" Hammerdrill Dwd520',
  stock = 25,
  handleStep,
  setVisible,
}) => {
  return (
    <>
      <ModalHeader className="text-center" style={{ justifyContent: "center" }}>
        <span> Add Item</span>
      </ModalHeader>
      <ModalBody>
        <div className="addItemWrapper">
          <div
            className="addItemImage"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="addItemDetailSection">
            <div className="nameAndStock">
              <span>{name}</span>
              <span>{stock}-Available</span>
            </div>
            <div className="qualitySection">
              <span style={{ marginBottom: 9 }}>Quantity</span>
              <CustomModalNumberInput />
            </div>
          </div>
        </div>
        <CustomModalFooter
          handleRevert={() => handleStep(1)}
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
      <button
        onClick={() => {
          hideModal();
          setTimeout(() => {
            handleRevert();
          }, 1000);
        }}
        className="addUserSave"
      >
        Save
      </button>
    </div>
  );
};

export const CustomModalNumberInput = () => {
  const [value, setValue] = useState(0);
  const inputRef = useRef();
  console.log(inputRef);
  return (
    <div className="inputNumberWrapper">
      <input ref={inputRef} type="number" step="5" min="0" value={value} />
      <div className="uanddWrapper">
        <button
          className="upAndDown"
          onClick={() => inputRef.current.stepUp()}
          style={{ backgroundImage: `url(${up})` }}
        ></button>
        <button
          className="upAndDown"
          onClick={() => inputRef.current.stepDown()}
          style={{ backgroundImage: `url(${down})` }}
        ></button>
      </div>
    </div>
  );
};
