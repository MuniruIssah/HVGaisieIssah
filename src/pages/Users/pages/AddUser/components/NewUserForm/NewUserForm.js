import React, { useState } from "react";
import "./styles.css";
import InputBlock from "../InputBlock/InputBlock";
import SelectBlock from "../SelectBlock/SelectBlock";
import pdf from "../../../../assets/pdf.png";
const NewUserForm = () => {
  const [stores, setStores] = useState([]);
  const handleAddStore = () => {
    const indexForStore = `Store${stores.length}`;
    setStores([
      ...stores,
      { index: indexForStore, store_name: "", account_type: "" },
    ]);
  };
  const handleDeleteStore = (index) => {
    const newStores = stores.filter((store) => store.index != index);
    console.log(newStores)
    setStores(newStores);
  };
  return (
    <form className="addNewUserForm">
      <PersonalDetailsSection />
      {stores.map((store, index) => (
        <SelectRow onClick={handleDeleteStore} {...store} />
      ))}
      <DynamicStoreButton onClick={handleAddStore} />

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

const SelectRow = ({ onClick, index, store_name, account_type }) => {
  const removeStore = () => onClick(index);

  return (
    <div className="storeSection">
      <SelectBlock label="Store Name" />
      <SelectBlock label="Account Type" small />
      <div className="deleteStore" onClick={removeStore}></div>
    </div>
  );
};
const DynamicStoreButton = ({ onClick }) => {
  const addStore = () => onClick();
  return (
    <div className="dynamicStoreSection">
      <button className="addAStore" type="button" onClick={addStore}>
        +&nbsp;&nbsp;&nbsp;Add another Store
      </button>
    </div>
  );
};
const ProfileImageSection = () => {
  return (
    <div style={{ width: "150px" }}>
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
