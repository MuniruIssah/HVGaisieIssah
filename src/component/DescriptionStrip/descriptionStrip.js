import React from "react";

const DescriptionStrip = ({ description,type,children }) => {
  let classN=type?`description formDescription ${type}`:"description formDescription"
  return (
    <>
    <div className="formDescriptionStrip">
      <span className={classN}>{description}{children}</span>
      
    </div>
    
    </>
  );
};

export default DescriptionStrip;
