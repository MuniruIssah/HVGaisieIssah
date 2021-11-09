import React, { useState } from "react";
import "./styles.css";
import GoBack from "../../components/GoBack/GoBack";
import NewUserForm from "./components/NewUserForm/NewUserForm";
const AddSalesPerson = () => {
  return (
    <div className="dashboardPage">
      <GoBack label="Sales Person" style={{ width: "140px" }} />
      <h1
        style={{
          borderBottom: "2px solid #E3E7ED",
          padding: "20px 0px",
        }}
      >
        Add New Sales Person
      </h1>
      <NewUserForm />
    </div>
  );
};

export default AddSalesPerson;
