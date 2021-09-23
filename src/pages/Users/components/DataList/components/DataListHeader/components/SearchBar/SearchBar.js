import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles.css";
const SearchBar = () => {
  return (
    <div className="userSearchBar">
      <FontAwesomeIcon icon={faSearch} className="sBIcon" fontWeight="100" />
      <input type="text" placeholder="Search User" />
    </div>
  );
};

export default SearchBar;
