import React from "react";
import "./styles.css";
const LogisticsColumnLayout = ({ children, grid }) => {
  return (
    <div className="twoColumnLayout" style={{ gridTemplateColumns: grid }}>
      {children}
    </div>
  );
};

export default LogisticsColumnLayout;
