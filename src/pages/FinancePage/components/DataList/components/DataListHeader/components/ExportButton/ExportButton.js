import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "@fortawesome/free-regular-svg-icons";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
const ExportButton = () => {
  return (
    <button className="exportButton">
      <span>Export</span>
      <FontAwesomeIcon icon={faFileExcel} className="eBIcon" />
    </button>
  );
};

export default ExportButton;
