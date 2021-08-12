import React, { useState, useEffect } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { Flag } from "react-bootstrap-icons";
import "./styles.css";
import { countryCodesAndFlags } from "../../../utils/functions";
const PhoneNumberInput = ({ onChange, onSelect }) => {
  const [allFandCodes, setAllFandCodes] = useState([]);
  const [selectedCode, setSelectedCode] = useState({});
  const [showCodes, setShowCodes] = useState(false);

  useEffect(() => {
    const allFlagsandCounts = countryCodesAndFlags();
    console.log(Object.values(allFlagsandCounts));
    setAllFandCodes(Object.values(allFlagsandCounts));
    setSelectedCode(
      Object.values(allFlagsandCounts).filter(
        (item) => item.dialCode === "+233"
      )
    );
  }, []);
  const handleChange = (e) => {
    onChange(e);
  };
  return (

      <div className="phoneNumberInput">
        <button
          className="selectButton"
          type="button"
          onClick={() => setShowCodes(!showCodes)}
        >
          <img
            style={{ width: 25, height: 18, borderRadius: 4, marginRight: 4 }}
            src={`data:image/svg+xml;utf8,${encodeURIComponent(
              selectedCode[0]?.flag
            )}`}
          />
          {selectedCode[0]?.dialCode}
          <div className="downIcon"></div>
        </button>
        <div
          className="selectOptions"
          style={{ display: showCodes ? "block" : "none" }}
        >
          {allFandCodes.map((item) => (
            <div style={{ display: "flex", marginBottom: 4 }}>
              <img
                style={{
                  width: 23,
                  height: 16,
                  borderRadius: 4,
                  marginRight: 4,
                }}
                src={`data:image/svg+xml;utf8,${encodeURIComponent(item.flag)}`}
              />
              <span style={{ fontSize: 14 }}>{item.dialCode}</span>
            </div>
          ))}
        </div>
        <input type="tel" className="telInput" onChange={handleChange} />
      </div>

  );
};

export default PhoneNumberInput;

{
  /* */
}

{}
{/* <div style={{backgroundImage:allFandCodes[0]?.flag.slice(1,-1),width:20,height:20,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'contain',border:"1px solid blue"}}></div> */}

{/* <InputGroup>
  <InputGroupAddon addonType="prepend">
    <InputGroupText>
      <Input
        addon
        type="select"
        onChange={onSelect}
        required
        className="numberInput"
      >
        {allFandCodes.map((item) => (
          <option value={item.dialCode}>{item.dialCode}</option>
        ))}
      </Input>
    </InputGroupText>
  </InputGroupAddon>
  <Input
    type="tel"
    placeholder="Enter Number"
    className="telInput"
    onChange={handleChange}
    required
  />
</InputGroup> */}