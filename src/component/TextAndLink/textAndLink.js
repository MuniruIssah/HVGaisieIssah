import React from "react";
import "./styles.css";
const TextAndLink = ({ text, link }) => {
  return (
    <div className="tAndL">
      <span>{text}</span>{" "}&nbsp;
      <a href="#" className="bolder">
        {link}
      </a>
    </div>
  );
};

export default TextAndLink;
