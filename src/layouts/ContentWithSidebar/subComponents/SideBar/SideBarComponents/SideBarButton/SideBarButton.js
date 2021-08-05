import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import "./styles.css";
import { useHistory, useLocation } from "react-router-dom";
const SideBarButton = ({ label, link, subroutes, active, inactive }) => {
  const [icon, setIcon] = useState("inactive");
  const [classs, setClasss] = useState("sideBarButton");
  const history = useHistory();
  const { pathname } = useLocation();
  console.log(pathname);
  const handleLink = (link) => history.push(link);
  useEffect(() => {
    if (pathname.includes(link)) {
      setClasss("sideBarButton active");
      setIcon(active);
    } else {
      setClasss("sideBarButton");
      setIcon(inactive);
    }
  }, [pathname]);

  return (
    <div
      className="sideBarWrapper"
      onMouseOver={() => (pathname.includes(link) ? null : setIcon(active))}
      onMouseLeave={() => (pathname.includes(link) ? null : setIcon(inactive))}
    >
      <button onClick={() => handleLink(link)} className={classs}>
        <div
          className="sideBarButtonIcon"
          style={{
            backgroundImage: `url(${icon})`,
          }}
        ></div>
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
