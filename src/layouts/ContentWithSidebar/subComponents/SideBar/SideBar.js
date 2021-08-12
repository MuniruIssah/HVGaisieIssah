import React from "react";
import "./styles.css";
import logo from "../../../../assets/logo.svg";
import SideBarButton from "./SideBarComponents/SideBarButton/SideBarButton";
const HVSideBar = ({ sideBarButtons }) => {
  return (
    <aside className="hvDashboardSideBar">
      <div
        className="hvDashboardSideBarLogo"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
      {sideBarButtons.map((sideBarButton) => (
        <SideBarButton
        key={sideBarButton.label}
         {...sideBarButton}
        />
      ))}
    </aside>
  );
};

export default HVSideBar;
