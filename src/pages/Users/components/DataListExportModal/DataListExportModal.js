import React, { useState } from "react";
import Invoice from "../Invoice/Invoice";
import close from "../../assets/closeIcon.png";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { faCircle, faDotCircle } from "@fortawesome/free-regular-svg-icons";
const DataListExportModal = ({ visible, children, onClose }) => {
  return (
    <>
      {visible && (
        <div className="dataListExportModal" >
          <div className="dataListExportModalContent" onClick={onClose}>
            <DataListExportModalContent />
          </div>
        </div>
      )}
    </>
  );
};

export default DataListExportModal;

const dummyList = [
  "Today",
  "Current page",
  "Current month",
  "Selected: 5 transactions",
  "All Orders",
  "Custom",
];
const DataListExportModalContent = () => {
  return (
    <>
      <header className="dataListExportModalContentHeader">
        <span>Export Transaction History</span>
        <div
          className="closeIcon"
          style={{ backgroundImage: `url(${close})`, width: 12, height: 12 }}
        ></div>
      </header>
      <main className="dataListExportModalContentMain">
        <DataListExportModalContentRadioGroup list={dummyList} />
      </main>
      <footer className="dataListExportModalContentFooter">
        <button>Cancel</button>
        <button>Export Transactions</button>
      </footer>
    </>
  );
};

const DataListExportModalContentRadioGroup = ({ list }) => {
  const [selectedItem, setSelectedItem] = useState("Today");
  const handleRadioSelect = (item) => setSelectedItem(item);
  return (
    <>
      {list.map((item) => (
        <DataListExportModalContentRadioItem
          label={item}
          selectedItem={selectedItem}
          handleSelect={handleRadioSelect}
        />
      ))}
    </>
  );
};
const DataListExportModalContentRadioItem = (props) => {
  return (
    <button
      className="dataListExportModalContentRadioItem"
      style={{ border: "none", background: "none", marginBottom: 5 }}
      onClick={()=>props.handleSelect(props.label)}
    >
      <div
        className="firstDiv"
        style={{
          border:
            props.selectedItem === props.label
              ? "2px solid #553ffb"
              : "2px solid grey",
          
        }}
      >
        {props.selectedItem === props.label ? (
          <div className="selected"></div>
        ) : null}
      </div>
      <span>{props.label}</span>
    </button>
  );
};
