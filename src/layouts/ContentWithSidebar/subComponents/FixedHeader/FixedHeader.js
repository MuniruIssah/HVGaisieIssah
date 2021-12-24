import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import notificationIcon from "../../../../assets/notificationIcon.svg";
import profileIcon from "../../../../assets/profileIcon.svg";
import noNotifications from "../../../../assets/noNotifications.svg";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import "./styles.css";
import { NavLink } from "react-router-dom";
import { notificationDummyList } from "../../../../utils/yutils";
const FixedHeader = ({ storeName, logo }) => {
  return (
    <header className="fixedHeader">
      <label className="fixedHeaderContent fHCStoreLabel">{storeName}</label>
      <div
        className="fixedHeaderContent fHCStoreImage"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>
      <NotificationDropdown />
      <ProfileDropdown />
    </header>
  );
};

export default FixedHeader;

const ProfileDropdown = ({
  number = "055 1234 567",
  warehouse = "Warehouse Manager",
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="fixedHeaderWrapper">
      <div
        className="fixedHeaderProfileIcon"
        style={{ backgroundImage: `url(${profileIcon})` }}
        onClick={toggle}
      ></div>
      <div hidden={!showMenu} className="fixedHeaderProfileDropdownMenu">
        <div className="numberAndWarehouse">
          <span>{number} </span>
          <span>{warehouse} </span>
        </div>
        <NavLink
          to="/dashboard/settings"
          className="fixedHeaderProfileNavLinks"
          activeClassName="fixedHeaderProfileNavLinksActive"
        >
          Profile
        </NavLink>
        <div className="fixedHeaderProfileNavLinks">Sign out</div>
      </div>
    </div>
  );
};

const NotificationDropdown = ({ list = notificationDummyList }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="fixedHeaderWrapper">
      <div
        className="fixedHeaderNotificationIcon"
        style={{ backgroundImage: `url(${notificationIcon})` }}
        onClick={toggle}
      ></div>

      <div
        hidden={!showMenu}
        className={`fixedHeaderNotificationDropdownMenu ${
          list.length === 0 ? "notificationCentered" : ""
        }`}
      >
        {list.length > 0 ? <Notifications list={list} /> : <NoNotifications />}
      </div>
    </div>
  );
};

const NoNotifications = () => {
  return (
    <div className="noNotificationsWrapper">
      <div
        className="noNotifications"
        style={{ backgroundImage: `url(${noNotifications})` }}
      ></div>
      <span className="noHeading">No Notifications</span>
      <span className="noContent">
        All your HopeVoice business <br />
        notifications will show up here.
      </span>
    </div>
  );
};

const Notifications = ({ list }) => {
  return (
    <div className="listNotificationsWrapper">
      {list.map((listItem, index) => (
        <NotificationItem key={index} item={listItem} />
      ))}
    </div>
  );
};

const NotificationItem = ({ item }) => {
  return (
    <div className="singleNotificationWrapper">
      <div className="singleNotificationIconSection">
        <div
          className="singleNotificationIcon"
          style={{ backgroundImage: `url(${item?.image})` }}
        ></div>
      </div>
      <div className="singleNotificationContentSection">
        <p>{item?.body}</p>
        <span>{item?.date}</span>
      </div>
    </div>
  );
};
