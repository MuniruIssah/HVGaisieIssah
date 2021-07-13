import React from "react";
import { Input } from "reactstrap";
import { Search } from 'react-bootstrap-icons';
import "./styles.css";
const searchBarStyles = {
  height: "50px",
  background: "#F4F5F7",
  borderRadius: "6px",
  fontSize:'14px',
  marginBottom:'1.5rem',
  border: "none",
};
const SearchBar = ({onSearch}) => {
  // const [input, setInput] = useState('')
  const handleChange=(e)=>{
    onSearch(e.target.value)
  }
  return (
    <Input
      onChange={handleChange}
      style={searchBarStyles}
      className="searchForShop"
      type="search"
      name="search"
      id="exampleSearch"
      placeholder="Search Shop"
    />
  );
};

export default SearchBar;
