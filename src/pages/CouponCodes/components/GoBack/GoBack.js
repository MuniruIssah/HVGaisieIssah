import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router-dom";
import back from '../../../../assets/back.svg'
import "./styles.css"
const GoBack = () => {
  const history=useHistory()
  return (
    <button onClick={()=>history.goBack()} className="goBack" style={{width:140}}>
      <div className="backIcon" style={{backgroundImage:`url(${back})`}}></div>
      <span>Coupon Codes</span>
    </button>
  );
};

export default GoBack;
