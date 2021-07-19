import React from "react";
import ContentWithSidebarLayout from "../../layouts/ContentWithSidebar/ContentWithSidebarLayout";
import { mainContent, SideBarContent } from "../../utils/dashboardContentProps";
import logo from "../../assets/logo.png";

const HVDashboard = () => {
  return (
    <ContentWithSidebarLayout
      sidebarContent={SideBarContent}
      mainContent={mainContent}
      storeName="The Hardware Shop"
      storeLogo={logo}
    />
  );
};

export default HVDashboard;
