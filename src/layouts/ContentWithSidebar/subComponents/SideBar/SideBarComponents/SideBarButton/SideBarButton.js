import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./styles.css";
import { useHistory, useRouteMatch } from "react-router-dom";
const SideBarButton = ({ icon, label, link }) => {
  const { path } = useRouteMatch();
  const history = useHistory();
  const handleLink = () => history.push(link);
  console.log(window.location.href, link);
  let fullLink = `http://localhost:3000${link}`;
  let classs =
    window.location.href === fullLink
      ? "sideBarButton active"
      : "sideBarButton";
  return (
    <button onClick={handleLink} className={classs}>
      <FontAwesomeIcon
        className="sideBarButtonIcon"
        icon={icon ? icon : faHourglassHalf}
      />
      <label>{label}</label>
    </button>
  );
};

export default SideBarButton;
