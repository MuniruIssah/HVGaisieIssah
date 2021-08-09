import React, { useState } from "react";
import "./styles.css";
import GoBack from "../../components/GoBack/GoBack";
import NewUserForm from "./components/NewUserForm/NewUserForm";
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
      <NewUserForm/>
    </div>
  );
};

export default AddUser;
