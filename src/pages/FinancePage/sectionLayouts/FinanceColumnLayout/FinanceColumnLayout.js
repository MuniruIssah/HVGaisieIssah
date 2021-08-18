import React from "react";
import "./styles.css";
const FinanceColumnLayout = ({ children, grid }) => {
  return (
    <div className="twoColumnLayout" style={{ gridTemplateColumns: grid ,width:'100%'}}>
      {children}
    </div>
  );
};

export default FinanceColumnLayout;
