import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";
const SideBarButton = ({ icon, label, link, subroutes }) => {
  const history = useHistory();
  const handleLink = (link) => history.push(link);
  let fullLink = `http://localhost:3000${link}`;
  let classs =
    window.location.href === fullLink
      ? "sideBarButton active"
      : "sideBarButton";
  return (
    <div className="sideBarWrapper">
      <button onClick={() => handleLink(link)} className={classs}>
        <FontAwesomeIcon
          className="sideBarButtonIcon"
          icon={icon ? icon : faHourglassHalf}
        />
        <label>{label}</label>
      </button>
      {subroutes && (
        <div className="subroutesDiv">
          {subroutes.map((item) => (
            <button onClick={() => handleLink(item.link)} key={item.label}>
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SideBarButton;
