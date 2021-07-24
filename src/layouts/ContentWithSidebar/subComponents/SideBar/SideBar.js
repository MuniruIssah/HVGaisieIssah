import React from "react";
import "./styles.css";
import logo from "../../../../assets/logo.png";
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
          label={sideBarButton.label}
          icon={sideBarButton.icon}
          link={sideBarButton.link}
        />
      ))}
    </aside>
  );
};

export default HVSideBar;
