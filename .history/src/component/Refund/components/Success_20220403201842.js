import React from "react";
import { ModalBody, ModalHeader, ModalFooter, Input } from "reactstrap";
import refundSuccess from "../assets/success.svg";
const Success = () => {
  return (
    <ModalBody
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        // className=""
        style={{
          backgroundImage: `url(${refundSuccess})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: 84,
          width: 84,
          marginBottom: "1rem",
        }}
      ></div>
      <span style={{ display: "block", marginBottom: "3rem" }}>
        Refund made successfully
      </span>
      <button
        className="button"
        style={{
          height: 35,
          width: "70%",
          background: " #553FFB",
          borderRadius: 6,
        }}
      >
        Go back to orders
      </button>
    </ModalBody>
  );
};

export default Success;
