import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {   } from "@fortawesome/free-regular-svg-icons";
import { faBell,faUserAlt } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
const FixedHeader = ({storeName,logo}) => {
  return (
    <header className="fixedHeader">
      <label className='fixedHeaderContent fHCStoreLabel'>{storeName}</label>
      <div className='fixedHeaderContent fHCStoreImage' style={{ backgroundImage: `url(${logo})` }}></div>
      <FontAwesomeIcon className='fixedHeaderContent fHCIcon' icon={faBell} />
      <FontAwesomeIcon className='fixedHeaderContent fHCIcon' icon={faUserAlt} />
    </header>
  );
};

export default FixedHeader;
