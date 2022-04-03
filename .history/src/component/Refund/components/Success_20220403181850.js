import React from "react";
import { ModalBody, ModalHeader, ModalFooter, Input } from "reactstrap";
import refundSuccess from "../assets/success.svg";
const Success = () => {
  return (
    <ModalBody>
      <div
        // className=""
        style={{
          backgroundImage: refundSuccess,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: 100,
          width: 100,
        }}
      ></div>
      <span>Refund made successfully</span>
    </ModalBody>
  );
};

export default Success;
