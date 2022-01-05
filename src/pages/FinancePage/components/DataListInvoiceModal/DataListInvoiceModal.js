import React from "react";
import Invoice from "../Invoice/Invoice";
import "./styles.css";
const DataListInvoiceModal = ({ visible, children, onClose }) => {
  return (
    <>
      {visible && (
        <div className="dataListModal">
          <div className="dataListModalContent">
            <Invoice onClose={onClose} />
          </div>
        </div>
      )}
    </>
  );
};

export default DataListInvoiceModal;
