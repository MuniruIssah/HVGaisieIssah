import React from "react";
import DataListModal from "../../components/DataListInvoiceModal/DataListInvoiceModal";
import DataList from "../../components/DataList/DataList";
import {
  PreSearchResultCard,
  SearchFailedCard,
  SearchLoadingCard,
} from "../../components/SearchResultCards/SearchResultCards";
import "./styles.css";
const UsersProfile = () => {
  return (
    <div className="financePage">
      <h1>Users</h1>
      <div className="financeContent">
        <DataList />
      </div>
    </div>
  );
};

export default UsersProfile;

