import React, { useState } from "react";
import "./styles.css";
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
];
const SelectBlock = ({
  label = "Store",
  list = dummySelectList,
  value,
  small,
  onChange,
}) => {
  const [showList, setShowList] = useState(false);
  const [selected, setSelected] = useState(value);
  const handleShowList = () => setShowList(!showList);

  const handleSelection = (item) => {
    let storeLabel = label === "Store Name" ? "store_name" : "account_type";
    onChange(storeLabel, item);
    setSelected(item);
  };
  return (
    <div className={`selectBlock`} style={{ width: small ? "350px" : "415px",marginTop:15}}>
      <div className="selectMain" onClick={handleShowList}>
          {label}
        {selected && <span>{selected}</span>}
      </div>
      <div
        className={`selectList ${showList ? "active" : ""}`}
        // onChange={(e) => onChange(index, e)}
      >
        {dummySelectList.map((item) => (
          <div className={`selectItem`}>
            <input
              type="radio"
              name={`store_name`}
              id={`${item.name}`}
              value={item.name}
            />
            <label for={`${item.name}`}>
              <span>{item.name}</span>
              <span>{item.address}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectBlock;



// ${
//   //   store.store_name === item.name ? "activeSelectItem" : ""
//    }
// ${store.store_id}
// ${store.store_id}