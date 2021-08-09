import React from "react";
import "./styles.css";
import pdf from "../../../../../../assets/pdf.png";
import print from "../../../../../../assets/print.png";

const ActionsStrip = () => {
  return (
    <div className="actionsStrip">
      <IconButton icon={pdf} />
      <IconButton icon={print} />

      <UserDeleteButton />
      <UserUpdateButton />
    </div>
  );
};

export default ActionsStrip;

const IconButton = ({ icon }) => {
  return (
    <button className="iconButton">
      <div className="icon" style={{ backgroundImage: `url(${icon})` }}></div>
    </button>
  );
};

const UserDeleteButton = () => {
  return <button className="actionStripButton delete">- Delete</button>;
};
const UserUpdateButton = () => {
  return <button className="actionStripButton update">+ Update Info</button>;
};
