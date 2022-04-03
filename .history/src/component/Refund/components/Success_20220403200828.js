import React from "react";
import { ModalBody, ModalHeader, ModalFooter, Input } from "reactstrap";
import refundSuccess from "../assets/success.svg";
const Success = () => {
  return (
    <ModalBody style={{ display: "flex", flexDirection: "column" }}>
      <div
        // className=""
        style={{
          backgroundImage: `url(${refundSuccess})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: 84,
          width: 84,
        }}
      ></div>
      <span>Refund made successfully</span>
    </ModalBody>
  );
};

export default Success;
