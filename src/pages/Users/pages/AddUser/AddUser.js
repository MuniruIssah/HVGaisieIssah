import React, { useState } from "react";
import "./styles.css";
import GoBack from "../../components/GoBack/GoBack";
import InputBlock from "./components/InputBlock/InputBlock";
import SelectBlock from "./components/SelectBlock/SelectBlock";

const AddUser = () => {
  return (
    <div className="dashboardPage">
      <GoBack />
      <h1
        style={{
          borderBottom: "2px solid #E3E7ED",
          padding: "20px 0px",
        }}
      >
        Add New User
      </h1>
      <InputBlock />
      <InputBlock label="Last Name" />
      <InputBlock label="Phone Number"/>
      <InputBlock label="Password" type="password" />
      <SelectBlock />
    </div>
  );
};

export default AddUser;




