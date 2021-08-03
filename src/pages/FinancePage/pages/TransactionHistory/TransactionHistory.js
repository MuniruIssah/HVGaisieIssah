import React from "react";
import DataListModal from "../../components/DataList/components/DataListModal/DataListModal";
import DataList from "../../components/DataList/DataList";
import {
  PreSearchResultCard,
  SearchFailedCard,
  SearchLoadingCard,
} from "../../components/SearchResultCards/SearchResultCards";
import "./styles.css";
const TransactionHistory = () => {
  return (
    <div className="financePage">
      <h1>
        Finance - <span>Transaction History</span>
      </h1>
      <div className="financeContent"> 
      <DataList />
      </div>

    </div>
  );
};

export default TransactionHistory;

/* <PreSearchResultCard/>
      <SearchLoadingCard/>
      <SearchFailedCard search="issah"/> */
