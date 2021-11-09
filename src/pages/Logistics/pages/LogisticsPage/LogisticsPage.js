import React, { useCallback, useState } from "react";
import DataListModal from "../../components/DataListInvoiceModal/DataListInvoiceModal";
import DataList, { AddDriverButton } from "../../components/DataList/DataList";
import {
  PreSearchResultCard,
  SearchFailedCard,
  SearchLoadingCard,
} from "../../components/SearchResultCards/SearchResultCards";
import "./styles.css";
const LogisticsPage = () => {
  const [driversView, setDriversView] = useState(true);
  const filters = [
    {
      label: "Vehicles",
      active: !driversView,
      onClick: () => setDriversView(false),
    },
    {
      label: "Sales Person",
      active: driversView,
      onClick: () => setDriversView(true),
    },
  ];
  const display = useCallback(() => {
    if (driversView) {
      return (
        <DataList filters={filters}>
          <AddDriverButton path="/dashboard/logistics/add" />
        </DataList>
      );
    } else {
      return <DataList filters={filters} allowSelect></DataList>;
    }
  }, [driversView]);
  
  return (
    <div className="dashboardPage">
      <h1>Logistics</h1>
      <div className="financeContent">{display()}</div>
    </div>
  );
};

export default LogisticsPage;
