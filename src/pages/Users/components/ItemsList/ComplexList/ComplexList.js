import React from "react";
import "./styles.css";
const ComplexList = ({ list }) => {
  return (
    <ul className="complexList">
      {list.map((item, index) => (
        <li>
          <div
            className="itemLogoDiv"
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
          <div className="itemInfoDiv">
            <span className="itemInfoTitle">{item.title}</span>
            <div className="itemInfoMisc">
              <span className="itemSold">{item.noOfSold} sold</span>
              <span className="itemPrice">{item.price}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default ComplexList;
