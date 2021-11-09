import React from "react";
import GoBack from "../../components/GoBack/GoBack";
import LoginSession from "./components/LoginSession/LoginSession";
import NameAndActionsStrip from "./components/NameAndActionsStrip/NameAndActionsStrip";
import UserDetailsBlock from "./components/UserDetailsBlock/UserDetailsBlock";
import "./styles.css";

const DriverView = () => {
  return (
    <div className="dashboardPage">
      <GoBack />
      <NameAndActionsStrip />
      <UserDetailsBlock />
      <LoginSession />
    </div>
  );
};

export default DriverView;
