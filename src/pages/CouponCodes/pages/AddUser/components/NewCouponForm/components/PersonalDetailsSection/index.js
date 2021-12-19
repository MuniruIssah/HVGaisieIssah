import React from "react";
import InputBlock from '../../../InputBlock/InputBlock'
const PersonalDetailsSection = ({
  onChange,
  first_name,
  last_name,
  phone_number,
  password,
  email,
}) => {
  return (
    <div className="personalDetailsSection">
      <InputBlock
        label="Coupon Name"
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
      <InputBlock
        label="Email"
        onChange={onChange}
        value={email}
        type="email"
      />
      <InputBlock
        label="Password"
        onChange={onChange}
        value={password}
        type="password"
      />
    </div>
  );
};

export default PersonalDetailsSection;
