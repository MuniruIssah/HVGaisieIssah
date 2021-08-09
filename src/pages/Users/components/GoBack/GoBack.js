import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import back from '../../assets/back.png'
import "./styles.css"
const GoBack = () => {
  return (
    <button className="goBack">
      <div className="backIcon" style={{backgroundImage:`url(${back})`}}></div>
      <span>Users</span>
    </button>
  );
};

export default GoBack;
