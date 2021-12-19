import React, { useState } from "react";
import "./styles.css";
const dummySelectList = [
     "SamDane Hardware Shop ",
     "The hardware City",
     "Hiatt Hardware ",  
];
const SelectBlock = ({
  label = "Coupon Type",
  list = dummySelectList,
  value,
  small,
  onChange,
  style
}) => {
  const [showList, setShowList] = useState(false);
  const handleShowList = () => setShowList(!showList);

  const handleSelection = (item) => {
    let storeLabel = label === "Store Name" ? "store_name" : "account_type";
    onChange(storeLabel, item);
    // setSelected(item);
  };
  return (
    <div className={`selectBlock`} style={{...style}}>
      <div className="selectMain" onClick={handleShowList}>
        <label
          className={`selectMainLabel ${
            value.length > 0 ? "selectedLabel" : ""
          }`}
          // hidden={value.length > 0? true : false}
        >
          {label}
        </label>
        {value.length > 0 && <span>{value}</span>}
      </div>
      <div
        className={`selectList ${showList ? "active" : ""}`}
        onChange={(e) => onChange(e.target.value)}
        style={{width:'100%'}}
      >
        {list.map((item) => (
          <div
            className={`selectItem ${
              value === item ? "activeSelectItem" : ""
            }`}
          >
            <input type="radio" name='coupon_codes' id={item} value={item} />
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

export default SelectBlock;
