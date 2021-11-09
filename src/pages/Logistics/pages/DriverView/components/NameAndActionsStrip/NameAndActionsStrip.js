import React from "react";
import "./styles.css";
import ActionsStrip from "./components/ActionsStrip/ActionsStrip";

const NameAndActionsStrip = ({ name = "Samuel Jakpasu" }) => {
  return (
    <div className="nameAndActionsStrip">
      <span>{name}</span>
      <ActionsStrip />
    </div>
  );
};

export default NameAndActionsStrip;
