import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles.css";
import { Modal, ModalBody, ModalHeader, ModalFooter, Input } from "reactstrap";
import { useLocation, Switch, Route, useHistory, Link } from "react-router-dom";
const AddItemsModal = ({ visible, setVisible }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <Modal isOpen={visible} centered toggle={() => setVisible(false)}>
      <ModalHeader className="text-center" style={{ justifyContent: "center" }}>
        <span> Add Item</span>
      </ModalHeader>

      <Switch>
        <Route path={`${pathname}/add`}>Add</Route>
        <Route path={`${pathname}/out-of-stock`}>Out of Stock</Route>
        <Route path={`${pathname}/inventory-update`}>Inventory Update</Route>
        <Route path={pathname} exact>
          <ModalBody>
            <SearchForItem />
            <ItemsList />
          </ModalBody>
        </Route>
      </Switch>
    </Modal>
  );
};

export default AddItemsModal;

const SearchForItem = () => {
  const searchBarStyles = {
    height: "100%",
    background: " #F4F5F7",
    fontSize: "14px",
    // marginBottom: "1.5rem",
    // border: "none",
  };
  return (
    <div className="logisticSearch">
      <FontAwesomeIcon className="icon" icon={faSearch} />
      <Input
        type="search"
        style={searchBarStyles}
        className="searchForItem"
        type="search"
        name="searchItem"
        id="exampleSearch"
        placeholder="Search Item"
      />
    </div>
  );
};

const ItemsList = () => {
  return (
    <div className="logisticsSearchList">
      {new Array(5).fill(0).map((item, index) => (
        <LogisticsSearchListItem key={index} />
      ))}
    </div>
  );
};

const LogisticsSearchListItem = ({
  name = `Caution Tape 3"X 300' Barrier 16100`,
  stockStatus = "Out of stock",
  profile = "https://via.placeholder.com/800",
  active,
}) => {
  const { pathname } = useLocation();

  return (
    <Link to={`${pathname}/add`} className={`item ${active ? "active" : ""}`}>
      <div
        className="profile"
        style={{ backgroundImage: `url(${profile})` }}
      ></div>
      <div className="detailSection">
        <span>{name}</span>
        <span>{stockStatus}</span>
      </div>
    </Link>
  );
};
