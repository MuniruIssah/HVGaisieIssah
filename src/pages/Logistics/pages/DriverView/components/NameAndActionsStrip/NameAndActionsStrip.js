import React from "react";
import "./styles.css";
import ActionsStrip from "./components/ActionsStrip/ActionsStrip";

const NameAndActionsStrip = ({ name = "Samuel Jakpasu", showActions }) => {
  return (
    <div className="nameAndActionsStrip">
      <span>{name}</span>
      {showActions && <ActionsStrip />}
    </div>
  );
};

export default NameAndActionsStrip;
