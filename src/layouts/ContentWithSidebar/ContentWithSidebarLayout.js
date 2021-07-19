import React from "react";
import { Col, Row } from "reactstrap";
import "./styles.css";
import SideBar from "./subComponents/SideBar/SideBar";
import logo from "../../assets/logo.png";
import Content from "./subComponents/Content/Content";
import FixedHeader from "./subComponents/FixedHeader/FixedHeader";

const DefaultRowStyle = {
  margin: 0,
};
const DefaultSecondColumnStyle = {
  position: "relative",
  padding: 0,
  height: "100vh",
  overflowY: "scroll",
};

const ContentWithSidebarLayout = ({
  sidebarContent,
  mainContent,
  storeName,
  storeLogo,
}) => {
  return (
    <Row className="contentWithSideBarLayout" style={DefaultRowStyle}>
      <Col style={{ margin: 0 }} className="sideBarColumn" xs="2" md="1">
        <SideBar sideBarButtons={sidebarContent} />
      </Col>
      <Col
        className="contentColumn"
        style={DefaultSecondColumnStyle}
        xs="10"
        md="11"
      >
        <FixedHeader storeName={storeName} logo={storeLogo} />
        <Content innerContent={mainContent} />
      </Col>
    </Row>
  );
};

export default ContentWithSidebarLayout;
