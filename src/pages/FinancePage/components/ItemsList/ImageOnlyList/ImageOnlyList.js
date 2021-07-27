import React from "react";
import "./styles.css";
const ImageOnlyList = ({ list }) => {
  return (
    <ul className="imageOnlyList">
      {list.map((item) => (
        <li>
          <div
            className="imageDiv"
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
          <div className="infoDiv">
            <span>{item.title}</span>
            <span className="nameSpan">{item.name}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageOnlyList;
