import React from "react";
import "./styles.css";
import logo from "../../assets/logo.png"
const AppDot = () => {
  return <div className="appDot"></div>;
};

export const AppIcon = () => {
  return (
    <div className="appIcon">
      
    </div>
  );
};

const HvHeader = () => {
  return (
    <header className="hvHeader">
      <AppIcon />
    </header>
  );
};

export default HvHeader;
