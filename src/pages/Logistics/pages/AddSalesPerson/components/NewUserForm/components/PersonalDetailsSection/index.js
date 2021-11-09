import React,{useState} from "react";
import InputBlock from '../../../InputBlock/InputBlock'
import SelectBlock from "../../../SelectBlock/SelectBlock";
import ProfileImageSection from "../ProfileImageSection";

const PersonalDetailsSection = ({
  onChange,
  first_name,
  last_name,
  phone_number,
  password,
  // email,
}) => {
  const [file, setFile] = useState({});
  const handleProfile = (newFile) => setFile(newFile);

  return (
    <div className="personalDetailsSection">
      <InputBlock
        label="First Name"
        onChange={onChange}
        value={first_name}
        type="text"
      />
      <InputBlock
        label="Last Name"
        onChange={onChange}
        value={last_name}
        type="text"
      />
      <InputBlock
        label="Phone Number"
        onChange={onChange}
        value={phone_number}
        type="text"
      />
      {/* <InputBlock
        label="Email"
        onChange={onChange}
        value={email}
        type="email"
      /> */}
      <InputBlock
        label="Password"
        onChange={onChange}
        value={password}
        type="password"
      />
      <SelectBlock small />
      <ProfileImageSection onChange={handleProfile} />
    </div>
  );
};

export default PersonalDetailsSection;
