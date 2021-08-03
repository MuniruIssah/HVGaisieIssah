import React from "react";
import "./styles.css";
const DataListModal = ({ visible, children,onClose }) => {
  return (
    <>
      {visible && (
        <div className="dataListModal" onClick={onClose}>
          <div className="dataListModalContent">
              {children}
          </div>
        </div>
      )}
    </>
  );
};

export default DataListModal;
