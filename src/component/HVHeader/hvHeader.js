import React from "react";
import "./styles.css";

const AppDot = () => {
  return <div className="appDot"></div>;
};

export const AppIcon = () => {
  return (
    <div className="appIcon">
      <AppDot />
      <span>Hope</span>
      <span>Voice</span>
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
