import React from "react";
import { ModalBody, ModalHeader, ModalFooter, Input } from "reactstrap";
import loading from "../assets/loading.svg";
const Loading = () => {
  return (
    <>
      <ModalBody
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "4rem 0px",
        }}
      >
        Processing Refund
        <div
          className="savingLoader"
          style={{ backgroundImage: `url(${loading})` }}
        ></div>
      </ModalBody>
    </>
  );
};

export default Loading;
