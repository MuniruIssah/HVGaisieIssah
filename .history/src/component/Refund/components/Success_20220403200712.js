import React from "react";
import { ModalBody, ModalHeader, ModalFooter, Input } from "reactstrap";
import refundSuccess from "../assets/success.svg";
const Success = () => {
  return (
    <ModalBody>
      <div
        // className=""
        style={{
          backgroundImage: `url(${refundSuccess})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: 60,
          width: 60,
        }}
      ></div>
      <span>Refund made successfully</span>
    </ModalBody>
  );
};

export default Success;
