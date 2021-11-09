import React, { useState, useMemo } from "react";
import DashBoardCard from "../../../DashboardPage/components/DashboardCard/DashboardCard";
import LabelAndValueStrip from "../../../DashboardPage/components/LabelAndValueStrip/LabelAndValueStrip";
import GoBack from "../../components/GoBack/GoBack";
import LogisticsColumnLayout from "../../sectionLayouts/LogisticsColumnLayout/LogisticsColumnLayout";
import LoginSession from "./components/LoginSession/LoginSession";
import NameAndActionsStrip from "./components/NameAndActionsStrip/NameAndActionsStrip";
import UserDetailsBlock from "./components/UserDetailsBlock/UserDetailsBlock";
import eyeIcon from "../../assets/eye.svg";
import DataList from "../../components/DataList/DataList";
import "./styles.css";
import DateToggleButtons from "../../components/DateToggleButtons/DateToggleButtons";
import DataListInvoiceModal from "../../components/DataListInvoiceModal/DataListInvoiceModal";
export const labelandValue = [
  {
    label: "Revenue",
    value: "₵ 2,046.38",
    green: true,
  },
  {
    label: "Total Orders",
    value: "203",
  },
  {
    label: "Total Customers",
    value: "203",
  },
];
export const labelandValue2 = [
  {
    label: "Items in Vehicle",
    value: "0",
  },
  {
    label: "Total Amount",
    value: "₵ 0",
  },
];

const DriverView = () => {
  const [assignHistoryView, setAssignHistoryView] = useState(true);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const filters = [
    {
      label: "Assign History",
      active: assignHistoryView,
      onClick: () => setAssignHistoryView(true),
    },
    {
      label: "Transaction History",
      active: !assignHistoryView,
      onClick: () => setAssignHistoryView(false),
    },
  ];
  const TransactionHistoryActions = [
    {
      icon: eyeIcon,
      action: () => setShowInvoiceModal(true),
      size: 15,
    },
  ];

  const display = useMemo(() => {
    if (assignHistoryView) {
      return (
        <DataList
          filters={filters}
          style={{ margin: "2rem 1rem 0rem" }}
        ></DataList>
      );
    } else {
      return (
        <DataList
          filters={filters}
          allowSelect
          style={{ margin: "2rem 1rem 0rem" }}
          actions={TransactionHistoryActions}
        >
          <DateToggleButtons />
        </DataList>
      );
    }
  }, [assignHistoryView]);
  return (
    <div className="dashboardPage">
      <DataListInvoiceModal
        visible={showInvoiceModal}
        onClose={() => setShowInvoiceModal(false)}
      />
      <GoBack label="Logistics" />
      <NameAndActionsStrip />
      <LogisticsColumnLayout grid="1fr 1fr">
        <DashBoardCard dates dateToday={true} zeeIndex>
          <LabelAndValueStrip list={labelandValue} />
        </DashBoardCard>
        <DashBoardCard
          title="Current Assigned Vehicle"
          style={{ justifyContent: "space-between", textAlign: "left" }}
        >
          <span style={{ color: "#3D4356", fontSize: 14 }}>Not Assigned</span>
          <div
            style={{
              width: "100%",
              height: 0,
              borderBottom: "1px solid #e3e7ed",
              margin: "10px 0rem",
            }}
          ></div>
          <LabelAndValueStrip
            list={labelandValue2}
            style={{ justifyContent: "flex-start" }}
          />
        </DashBoardCard>
      </LogisticsColumnLayout>
      <UserDetailsBlock />

      {display}
    </div>
  );
};

export default DriverView;
