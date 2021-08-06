import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./styles.css";
const CustomerTypes = ["New Customers", "All Customers"];
const FinanceSelect = () => {
  const [newCustomers, setNewCustomers] = useState("New Customers");
  const [showPopup, setShowPopup] = useState(false)
  return (
    <div className="financeSelectWrapper">
      <button className="financeSelect" onClick={()=>setShowPopup(!showPopup)}>
        <div className="financeSelectInfoSection">
          <span>Filter by</span>
          <span>{newCustomers}</span>
        </div>
        <FontAwesomeIcon className={`financeSelectIcon ${showPopup?"iconRotate":""}`} icon={faChevronDown} />
      </button>
      <div className="financeSelectPopup" style={{display:showPopup?"block":"none"}}>
        {CustomerTypes.map((customerType) => (
          <button
            key={customerType}
            className={`financeSelectPopupButton ${
              newCustomers === customerType ? "activePopupButton" : ""
            }`}
            onClick={() => setNewCustomers(customerType)}
          >
            {customerType}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FinanceSelect;
