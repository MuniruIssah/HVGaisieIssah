import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo, useState } from "react";
import DashBoardCard from "../../../DashboardPage/components/DashboardCard/DashboardCard";
import LabelAndValueStrip from "../../../DashboardPage/components/LabelAndValueStrip/LabelAndValueStrip";
import GoBack from "../../components/GoBack/GoBack";
import LogisticsColumnLayout from "../../sectionLayouts/LogisticsColumnLayout/LogisticsColumnLayout";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";
import eyeIcon from "../../assets/eye.svg";

import DataList from "../../components/DataList/DataList";
import "./styles.css";
import AddItemsModal from "./components/AddItemsModal/AddItemsModal";
import AssignDriverModal from "./components/AssignDriverModal/AssignDriverModal";

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
    value: "35",
  },
  {
    label: "Total Amount",
    value: "₵ 2,046",
  },
];

const VehicleView = ({ name = "A2 - (GA-6732-13)" }) => {
  const [itemsInVehicleView, setItemsInVehicleView] = useState(true);
  const [addItemModal, setAddItemModal] = useState(false);
  const [assignSalesPersonModal, setAssignSalesPersonModal] = useState(false);

  const filters = [
    {
      label: "Items in Vehicle",
      active: itemsInVehicleView,
      onClick: () => setItemsInVehicleView(true),
    },
    {
      label: "Assign History",
      active: !itemsInVehicleView,
      onClick: () => setItemsInVehicleView(false),
    },
  ];
  const itemsInVehicleActions = [
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
  const assignHistoryActions = [
    {
      icon: eyeIcon,
      action: "",
      size: 15,
    },
  ];

  const display = useMemo(() => {
    if (itemsInVehicleView) {
      return (
        <DataList
          filters={filters}
          image
          style={{ margin: "2rem 1rem 0rem" }}
          actions={itemsInVehicleActions}
          allowSelect
        >
          <button className="addNewUser" onClick={() => setAddItemModal(true)}>
            <FontAwesomeIcon icon={faPlus} /> <span>Add Items</span>
          </button>
        </DataList>
      );
    } else {
      return (
        <DataList
          filters={filters}
          showProfileImage
          // image
          style={{ margin: "2rem 1rem 0rem" }}
          actions={assignHistoryActions}
        >
        </DataList>
      );
    }
  }, [itemsInVehicleView]);

  return (
    <div className="dashboardPage">
      <AddItemsModal visible={addItemModal} setVisible={setAddItemModal} />
      <AssignDriverModal
        visible={assignSalesPersonModal}
        setVisible={setAssignSalesPersonModal}
      />
      <GoBack label="Logistics" />
      <h1 style={{ marginTop: "2rem" }}>{name}</h1>
      <LogisticsColumnLayout grid="1fr 1fr">
        <DashBoardCard dates dateToday={true} zeeIndex>
          <LabelAndValueStrip list={labelandValue} />
        </DashBoardCard>
        <DashBoardCard
          title="Current"
          style={{ justifyContent: "space-between" }}
        >
          <LabelAndValueStrip
            list={labelandValue2}
            style={{ justifyContent: "flex-start" }}
          />
          <div
            style={{
              width: "100%",
              height: 0,
              border: "0.5px solid #e3e7ed",
              margin: "10px 0rem",
            }}
          ></div>
          <SalesPersonSection showModal={setAssignSalesPersonModal} />
        </DashBoardCard>
      </LogisticsColumnLayout>
      {display}
    </div>
  );
};

export default VehicleView;

const SalesPersonSection = ({ salesPerson = true, showModal }) => {
  return (
    <div className="salesPersonSection">
      <span className="spsTitle">Sales Person</span>
      {salesPerson ? (
        <SalesPersonAvailable showModal={showModal} />
      ) : (
        <NoSalesPerson showModal={showModal} />
      )}
    </div>
  );
};
const NoSalesPerson = ({ showModal }) => {
  return (
    <div className="noSalesPerson">
      <span>No Drivers Assigned to Vehicle</span>
      <button className="addNewUser" onClick={() => showModal(true)}>
        <FontAwesomeIcon icon={faPlus} /> <span>Assign New Driver</span>
      </button>
    </div>
  );
};

const SalesPersonAvailable = ({
  image = "https://via.placeholder.com/800",
  name = "Ibrahim Danlad",
  number = "050 984 576",
  showModal,
}) => {
  return (
    <div className="salesPersonAvailable">
      <div className="salesPersonDetails">
        <div
          className="salesProfileImage"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="salesProfileMain">
          <span>{name}</span>
          <span>{number}</span>
        </div>
      </div>
      <div>
        <button
          onClick={() => showModal(true)}
          style={{ backgroundImage: `url(${editIcon})`, backgroundSize: 12 }}
          className="tableActionButton"
        ></button>
        <button
          style={{ backgroundImage: `url(${deleteIcon})`, backgroundSize: 12 }}
          className="tableActionButton"
        ></button>
      </div>
    </div>
  );
};
