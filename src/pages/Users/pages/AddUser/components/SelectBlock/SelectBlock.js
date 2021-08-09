import React,{useState} from "react";
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
  {
    name: "SamDane Hardware Shop ",
    address: "Tetteh Ashong Street,Accra 00233  Ghana GA-202-4895",
  },
  {
    name: "SamDane Hardware Shop ",
    address: "Tetteh Ashong Street,Accra 00233  Ghana GA-202-4895",
  },
  {
    name: "SamDane Hardware Shop ",
    address: "Tetteh Ashong Street,Accra 00233  Ghana GA-202-4895",
  },
];
const SelectBlock = ({ label = "Store", list = dummySelectList }) => {
  const [showList, setShowList] = useState(false);
  const [selected, setSelected] = useState("");
  const handleShowList = () => setShowList(!showList);
  return (
    <div className="selectBlock">
      <div className="selectMain" onClick={handleShowList}>
        <label
          className={`selectMainLabel ${
            selected.length > 0 ? "selectedLabel" : ""
          }`}
        >
          {label}
        </label>
        {selected.length > 0 && <span>{selected}</span>}
      </div>
      {showList && (
        <div className="selectList">
          {list.map((item, index) => (
            <div
              className={`selectItem ${
                selected === item.name ? "activeSelectItem" : ""
              } `}
              onClick={() => setSelected(item.name)}
            >
              <span>{item.name}</span>
              <span>{item.address}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectBlock;
