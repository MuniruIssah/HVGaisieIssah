import React, { useState } from "react";
import "./styles.css";
import GoBack from "../../components/GoBack/GoBack";
import NewCouponCodeForm from "./components/NewCouponForm/NewCouponCodeForm";
const AddCouponCodes = () => {
  return (
    <div className="dashboardPage">
      <GoBack />
      <h1
        style={{
          borderBottom: "2px solid #E3E7ED",
          padding: "20px 0px",
        }}
      >
       Create New Coupon Code
      </h1>
      <NewCouponCodeForm/>
    </div>
  );
};

export default AddCouponCodes;
