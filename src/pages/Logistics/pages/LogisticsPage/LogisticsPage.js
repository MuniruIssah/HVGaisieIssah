import React, { useCallback, useState } from "react";
import DataListModal from "../../components/DataListInvoiceModal/DataListInvoiceModal";
import DataList, { AddDriverButton } from "../../components/DataList/DataList";
import deleteIcon from "../../assets/delete.svg";
import editIcon from "../../assets/edit.svg";
import eyeIcon from "../../assets/eye.svg";

import {
  PreSearchResultCard,
  SearchFailedCard,
  SearchLoadingCard,
} from "../../components/SearchResultCards/SearchResultCards";
import "./styles.css";

const LogisticsPage = () => {
  const [driversView, setDriversView] = useState(false);
  const vehiclesActions = [
    {
      icon: deleteIcon,
      action: "",
      size: 12,
    },
    {
      icon: editIcon,
      action: "",
      size: 15,
    },
    {
      icon: eyeIcon,
      action: "",
      size: 15,
    },
  ];
  const salesPersonActions = [
    {
      icon: eyeIcon,
      action: "",
      size: 15,
    },
  ];
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
        <DataList filters={filters} showProfileImage actions={salesPersonActions}>
          <AddDriverButton path="/dashboard/logistics/add" />
        </DataList>
      );
    } else {
      return (
        <DataList
          filters={filters}
          allowSelect
          actions={vehiclesActions}
        ></DataList>
      );
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
