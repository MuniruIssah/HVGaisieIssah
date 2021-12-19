import React, { useState, useEffect, useRef } from "react";
import uniqid from "uniqid";
import "./styles.css";
import InputBlock from "../InputBlock/InputBlock";
import SelectBlock from "../SelectBlock/SelectBlock";

import { Input } from "reactstrap";
import ProfileImageSection from "./components/ProfileImageSection";
import PersonalDetailsSection from "./components/PersonalDetailsSection";
import { useHistory } from "react-router-dom";
const dummySelectList = [
  {
    name: "SamDane Hardware Shop ",
    address: "Tetteh Ashong Street,Accra 00233  Ghana GA-202-4895",
  },
  {
    name: "The hardware City",
    address: "Tetteh Ashong Street,Accra 00233  Ghana GA-202-4895",
  },
  {
    name: "Hiatt Hardware ",
    address: "Tetteh Ashong Street,Accra 00233  Ghana GA-202-4895",
  },
  {
    name: "ERfg Rjes ",
    address: "Tetteh Ashong SDe,Accra 00233  Ghana GA-202-4895",
  },
];
const dummyAccountList = [
  {
    name: "Warehouse Manager ",
  },
  {
    name: "Block Holder",
  },
  {
    name: "Driver",
  },
  {
    name: "Big Guy",
  },
];

const coupon_types = ["Fixed Amount", "Pecentage Amount"];
const limits = ["Daily", "Weekly", "Monthly"];
const NewUserForm = () => {
  const history = useHistory();
  const textAreaRef = useRef();
  //State
  // const [current, setcurrent] = useState(initialState)
  const [state, setState] = useState({
    coupon_name: "",
    expiry_date: new Date().toISOString(),
    description: "",
    coupon_type: "Fixed Amount",
    amount: 0,
    percentage: 0,
    quantity: 0,
    limits: "Daily",
    usage: 0,
  });

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <form className="addNewUserForm">
      <div className="personalDetailsSection">
        <InputBlock
          label="Coupon Name"
          onChange={(value) => setState({ ...state, coupon_name: value })}
          value={state.coupon_name}
          type="text"
        />
        <InputBlock
          label="Expiry Date"
          onChange={(value) => setState({ ...state, expiry_date: value })}
          value={state.expiry_date}
          type="datetime-local"
        />
      </div>
      <div
        className="couponDescription"
        onClick={() => textAreaRef.current.focus()}
      >
        <label>Description</label>
        <textarea
          ref={textAreaRef}
          required
          onChange={(e) => setState({ ...state, description: e.target.value })}
          value={state.description}
        ></textarea>
      </div>
      <div className="personalDetailsSection">
        <SelectBlock
          style={{
            width: "350px",
            margin: "15px 15px 15px 0px",
          }}
          value={state.coupon_type}
          list={coupon_types}
          onChange={(value) => setState({ ...state, coupon_type: value })}
        />
        {state.coupon_type === "Fixed Amount" ? (
          <InputBlock
            label="Enter Amount"
            onChange={(value) => setState({ ...state, amount: parseFloat(value) })}
            value={state.amount}
            type="text"
          />
        ) : (
          <InputBlock
            label="Enter Percentage"
            onChange={(value) => setState({ ...state, percentage: parseInt(value) })}
            value={state.percentage}
            type="text"
          />
        )}
        {/* <InputBlock
          label="Enter Amount"
          onChange={(value) => setState({ ...state, amount: value })}
          value={state.amount}
          type="text"
        /> */}
        <InputBlock
          label="Quantity"
          onChange={(value) => setState({ ...state, quantity: parseInt(value) })}
          value={state.quantity}
          type="text"
        />

        <div className="selectAndInput">
          <SelectBlock
            label="Limits"
            value={state.limits}
            style={{
              width: "185px",
              margin: "15px 0px 15px 0px",
            }}
            list={limits}
            onChange={(value) => setState({ ...state, limits: value })}
          />
          <InputBlock
            style={{ width: 156 }}
            label="Usage"
            onChange={(value) => setState({ ...state, usage: parseInt(value) })}
            value={state.quantity}
            type="text"
          />
        </div>
      </div>

      <div className="addUserButtons">
        <button
          type="button"
          onClick={() => history.goBack()}
          className="addUserCancel"
        >
          Cancel
        </button>
        <button type="submit" className="addUserSave">
          Save
        </button>
      </div>
    </form>
  );
};

export default NewUserForm;

//Sub components for the new user form

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

// Store Item Strip
const StoreItemStrip = ({ store, index, handleDeleteStore, onChange }) => {
  const [showStoreSelect, setShowStoreSelect] = useState(false);
  const [showAccountSelect, setShowAccountSelect] = useState(false);
  const toggleShowStoreSelect = () => setShowStoreSelect(!showStoreSelect);
  const toggleShowAccountSelect = () => {
    setShowAccountSelect(!showAccountSelect);
  };

  return (
    <div className="storeSection">
      <div className="selectBlock" style={{ width: "415px" }}>
        <div className="selectMain" onClick={toggleShowStoreSelect}>
          {store.store_name}
        </div>
        <div
          className={`selectList ${showStoreSelect ? "active" : ""}`}
          onChange={(e) => onChange(index, e)}
        >
          {dummySelectList.map((item) => (
            <div
              className={`selectItem ${
                store.store_name === item.name ? "activeSelectItem" : ""
              }`}
            >
              <input
                type="radio"
                name={`store_name`}
                id={`${item.name}${store.store_id}`}
                value={item.name}
              />
              <label for={`${item.name}${store.store_id}`}>
                <span>{item.name}</span>
                <span>{item.address}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className={`selectBlock`} style={{ width: "285px" }}>
        <div className="selectMain" onClick={toggleShowAccountSelect}>
          {store.account_type}
        </div>
        <div
          className={`selectList ${showAccountSelect ? "active" : ""}`}
          onChange={(e) => onChange(index, e)}
        >
          {dummyAccountList.map((item) => (
            <div
              className={`selectItem ${
                store.account_type === item.name ? "activeSelectItem" : ""
              }`}
            >
              <input
                type="radio"
                name={`account_type`}
                id={`${item.name}${store.store_id}`}
                value={item.name}
              />
              <label for={`${item.name}${store.store_id}`}>
                <span>{item.name}</span>
                <span>{item.address}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <div
        className="deleteStore"
        onClick={() => handleDeleteStore(index)}
      ></div>
    </div>
  );
};

const CouponSelectBlock = ({ itemList, currentItem, setCurrentItem }) => {
  const [showList, setShowList] = useState(false);
  const toggleShowList = () => {
    setShowList(!showList);
  };
  return (
    <div className={`selectBlock`} style={{ width: "350px" }}>
      <div className="selectMain" onClick={toggleShowList}>
        {currentItem}
      </div>
      <div
        className={`selectList ${showList ? "active" : ""}`}
        onChange={(e) => setCurrentItem(e.target.value)}
      >
        {itemList.map((item) => (
          <div
            className={`selectItem ${
              currentItem === item ? "activeSelectItem" : ""
            }`}
          >
            <input type="radio" id={item} value={item} />
            <label for={item}>
              <span>{item}</span>
              <span></span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
