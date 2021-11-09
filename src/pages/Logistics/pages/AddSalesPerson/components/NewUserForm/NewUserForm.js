import React, { useState, useEffect } from "react";
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
const NewSalesPersonForm = () => {
  const history = useHistory();

  //State
  const [store, setStore] = useState({});
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
        <button type="submit" className="addUserSave">
          Save
        </button>
      </div>
    </form>
  );
};

export default NewSalesPersonForm;

//Sub components for the new user form

// const DynamicStoreButton = ({ onClick }) => {
//   const addStore = () => onClick();
//   return (
//     <div className="dynamicStoreSection">
//       <button className="addAStore" type="button" onClick={addStore}>
//         +&nbsp;&nbsp;&nbsp;Add another Store
//       </button>
//     </div>
//   );
// };

// Store Item Strip
// const StoreItemStrip = ({ store, index, handleDeleteStore, onChange }) => {
//   const [showStoreSelect, setShowStoreSelect] = useState(false);
//   const [showAccountSelect, setShowAccountSelect] = useState(false);
//   const toggleShowStoreSelect = () => setShowStoreSelect(!showStoreSelect);
//   const toggleShowAccountSelect = () => {
//     setShowAccountSelect(!showAccountSelect);
//   };

//   return (
//     <div className="storeSection">
//       <div className="selectBlock" style={{ width: "415px" }}>
//         <div className="selectMain" onClick={toggleShowStoreSelect}>
//           {store.store_name}
//         </div>
//         <div
//           className={`selectList ${showStoreSelect ? "active" : ""}`}
//           onChange={(e) => onChange(index, e)}
//         >
//           {dummySelectList.map((item) => (
//             <div
//               className={`selectItem ${
//                 store.store_name === item.name ? "activeSelectItem" : ""
//               }`}
//             >
//               <input
//                 type="radio"
//                 name={`store_name`}
//                 id={`${item.name}${store.store_id}`}
//                 value={item.name}
//               />
//               <label for={`${item.name}${store.store_id}`}>
//                 <span>{item.name}</span>
//                 <span>{item.address}</span>
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className={`selectBlock`} style={{ width: "285px" }}>
//         <div className="selectMain" onClick={toggleShowAccountSelect}>
//           {store.account_type}
//         </div>
//         <div
//           className={`selectList ${showAccountSelect ? "active" : ""}`}
//           onChange={(e) => onChange(index, e)}
//         >
//           {dummyAccountList.map((item) => (
//             <div
//               className={`selectItem ${
//                 store.account_type === item.name ? "activeSelectItem" : ""
//               }`}
//             >
//               <input
//                 type="radio"
//                 name={`account_type`}
//                 id={`${item.name}${store.store_id}`}
//                 value={item.name}
//               />
//               <label for={`${item.name}${store.store_id}`}>
//                 <span>{item.name}</span>
//                 <span>{item.address}</span>
//               </label>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div
//         className="deleteStore"
//         onClick={() => handleDeleteStore(index)}
//       ></div>
//     </div>
//   );
// };


 // const handleAddStore = () => {
  //   const store_id = uniqid("store");
  //   setStores([
  //     ...stores,
  //     { store_name: "Store", account_type: "Account Type", store_id },
  //   ]);
  // };
  // useEffect(() => {
  //   console.log(stores);
  // }, [stores]);
  //Change Values for a store
  // const handleStoreChange = (index, e) => {
  //   const values = [...stores];
  //   console.log(e.target.name);
  //   values[index][e.target.name] = e.target.value;
  //   setStores(values);
  // };

    //Delete Store
  // const handleDeleteStore = (index) => {
  //   console.log(index);
  //   const values = [...stores];
  //   values.splice(index, 1);
  //   setStores(values);
  // };