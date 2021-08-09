import React from "react";
import "./styles.css";
import InputBlock from "../InputBlock/InputBlock";
import pdf from "../../../../assets/pdf.png";
const NewUserForm = () => {
  return (
    <form className="addNewUserForm">
      <PersonalDetailsSection />
      <DynamicStoreSection/>
      <ProfileImageSection />
    </form>
  );
};

export default NewUserForm;

const PersonalDetailsSection = () => {
  return (
    <div className="personalDetailsSection">
      <InputBlock label="First Name" type="text" />
      <InputBlock label="Last Name" type="text" />
      <InputBlock label="Phone Number" type="text" />
      <InputBlock label="Password" type="password" />
    </div>
  );
};

const DynamicStoreSection = () => {
    return(
        <div className="dynamicStoreSection">


        <button className="addAStore">+&nbsp;&nbsp;&nbsp;Add another Store</button>
        </div>
    );
};
const ProfileImageSection = () => {
  return (
    <div style={{width:'150px'}}>
      <div className="profileImageSection">
        <div className="profileImageSectionIcon"></div>
        <span>Profile Photo</span>
      </div>
      <div className="profileImageSectionActions"> 
        <button>
          <div
            className="eyecons"
            style={{ backgroundImage: `url(${pdf})`, width: 20, height: 18 }}
          ></div>
        </button>
        <button>
          <div
            className="eyecons"
            style={{ backgroundImage: `url(${pdf})`, width: 20, height: 18 }}
          ></div>
        </button>
      </div>
    </div>
  );
};
