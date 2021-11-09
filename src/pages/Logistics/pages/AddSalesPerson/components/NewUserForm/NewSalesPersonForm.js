import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import "./styles.css";
import InputBlock from "../InputBlock/InputBlock";
import SelectBlock from "../SelectBlock/SelectBlock";

import { Input } from "reactstrap";
import ProfileImageSection from "./components/ProfileImageSection";
import PersonalDetailsSection from "./components/PersonalDetailsSection";
import { useHistory } from "react-router-dom";
import SavingModal from "./components/SavingModal/SavingModal";

const NewSalesPersonForm = () => {
  const history = useHistory();

  //State
  const [store, setStore] = useState({});
  const [showSavingModal, setShowSavingModal] = useState(false)
  const [file, setFile] = useState({});
  const [personalDetails, setPersonalDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_number: "",
  });

  const handlePersonalDetailsChange = (fieldname, e) => {
    setPersonalDetails({ ...personalDetails, [fieldname]: e.target.value });
  };

  //Handle Profile
  const handleProfile = (newFile) => setFile(newFile);

  return (
    <>
    <SavingModal visible={showSavingModal} setVisible={setShowSavingModal} />
    <form className="addNewUserForm">
      <PersonalDetailsSection
        onChange={handlePersonalDetailsChange}
        {...personalDetails}
      />
      
      <div className="addUserButtons">
        <button
          type="button"
          onClick={() => history.goBack()}
          className="addUserCancel"
        >
          Cancel
        </button>
        <button type="button" className="addUserSave" onClick={()=>setShowSavingModal(true)}>
          Save
        </button>
      </div>
    </form>
    </>
  );
};

export default NewSalesPersonForm;