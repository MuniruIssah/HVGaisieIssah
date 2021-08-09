import React from "react";
import "./styles.css";
import logo from "../../../../assets/hopeVoiceLogo.png"
const UserDetailsBlock = () => {
  return (
    <div className="userDetailsBlock">
      <div className="userAvatarImage" style={{backgroundImage:`url(${logo})`}}></div>
      <div className="userDetails">
        <h5>User Details</h5>
        <LabelAndFieldStrip/>
        <LabelAndFieldStrip/>
        <LabelAndFieldStrip/>
      </div>
    </div>
  );
};

export default UserDetailsBlock;

const LabelAndFieldValue = ({ color, label, value }) => {
  return (
    <div className="labelAndFieldValue">
      <span>{label}</span>
      <span style={{color:color}}>{value}</span>
    </div>
  );
};
const dummyList = [
  {
    label: "First Name",
    value: "Issah",
  },
  {
    label: "Last Name",
    value: "Muniru",
    color:"#477DFB"
  },
  {
    label: "Account Type",
    value: "Warehouse Manager",
  },
];
const LabelAndFieldStrip = ({ list = dummyList }) => {
  return (
    <div className="labelAndFieldStrip">
      {list.map((item) => (
        <LabelAndFieldValue key={item.label} {...item} />
      ))}
    </div>
  );
};
