import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
export const PreSearchResultCard = () => {
  return (
    <div className="searchResultCard preResult">
      <span>Search Tip:</span>
      <span>
        Search orders by <b>Customer, Driver, Amount</b> or <b>Invoice ID</b>
      </span>
    </div>
  );
};

export const SearchLoadingCard = () => {
  return (
    <div className="searchResultCard loading">
      <FontAwesomeIcon icon={faCircleNotch} className="loadingIcon" />
    </div>
  );
};

export const SearchFailedCard = ({ search }) => {
  return (
    <div className="searchResultCard failed">
      <span>
        No results for <q>{search}</q>{" "}
      </span>
      <div className="helpStrip">
        <span>
          <b>Search tips:</b> Some search terms require an exact match. Try
          typing the entire term, or use a different word or phrase.
        </span>
      </div>
    </div>
  );
};
