import React from "react";
import "./styles.css";
const LoginSession = () => {
  return (
    <div className="loginSession">
      <h3>Login sessions</h3>
      <span>Places where user is logged into Hope Voice.</span>
      <LoginSessionTable/>
    </div>
  );
};

export default LoginSession;
const dummyList = [
  {
    location: "Accra",
    device: "Safari - Mac OS",
    ipAddress: "154.160.21.106",
    time: "May 13, 2021 12:23 AM",
  },
  {
    location: "Takoradi",
    device: "Safari - Mac OS",
    ipAddress: "154.160.27.18",
    time: "May 13, 2021 05:02 AM",
  },
];
const LoginSessionTable = ({ list = dummyList }) => {
  return (
    <table className="loginSessionTable">
      <tr>
        <th>Location</th>
        <th>Device</th>
        <th>IP Address</th>
        <th>Time</th>
      </tr>
      {list.map((item) => (
        <tr>
          <td>{item.location}</td>
          <td>{item.device}</td>
          <td>{item.ipAddress}</td>
          <td>{item.time}</td>
        </tr>
      ))}
    </table>
  );
};
