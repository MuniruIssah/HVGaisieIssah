import React from "react";
import Invoice from "../Invoice/Invoice";
import "./styles.css";
const DataListInvoiceModal = ({ visible, children, onClose }) => {
  return (
    <>
      {visible && (
        <div className="dataListModal" onClick={onClose}>
          <div className="dataListModalContent">
            <Invoice  />
          </div>
        </div>
      )}
    </>
  );
};

export default DataListInvoiceModal;
