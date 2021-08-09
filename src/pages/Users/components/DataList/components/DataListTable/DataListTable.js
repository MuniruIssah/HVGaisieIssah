import React, { useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import DataListModal from "../../../DataListInvoiceModal/DataListInvoiceModal";
import Invoice from "../../../Invoice/Invoice";
import { faPen, faPenAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory, useRouteMatch } from "react-router-dom";
const dummyList = [
  {
    NAME: "Issah",
    PHONE_NUMBER: "29292939",
    ACCOUNT_TYPE: "Kwame",
    STATUS: "Active",
  },
  {
    NAME: "Muniru",
    PHONE_NUMBER: "29292939",
    ACCOUNT_TYPE: "Kwame",
    STATUS: "Inactive",
  },
  {
    NAME: "Daddah",
    PHONE_NUMBER: "29292939",
    ACCOUNT_TYPE: "Kwame",
    STATUS: "Active",
  },
];
const DataListTable = ({ list = dummyList }) => {

  return (
    <table className="dataListTable">
      <FinanceDataListTableHeader
        headerList={["NAME", "PHONE NUMBER", "ACCOUNT TYPE", "STATUS"]}
      />
      <FinanceDataListTableMain list={list} />
    </table>
  );
};

export default DataListTable;

const FinanceDataListTableHeader = ({ headerList }) => {
  console.log(headerList);
  return (
    <tr className="tableHeader">
      <th>
        <div className="tableCheck"></div>
      </th>
      {headerList.map((item) => (
        <th key={item}>{item}</th>
      ))}
      <th>Action</th>
    </tr>
  );
};

const FinanceDataListTableMain = ({ list }) => {
  return (
    <tbody className="tableBody">
      {list.map((item) => (
        <FinanceDataListTableItem item={item} />
      ))}
    </tbody>
  );
};

const FinanceDataListTableItem = ({ item }) => {
  const [visible, setVisible] = useState(false);
  const { path } = useRouteMatch();
  const history=useHistory()
  return (
    <>
      <tr className="dataListTableItem">
        <td>
          <div className="tableCheck"></div>
        </td>
        <td>
          <div className="username">
            <div
              className="avatar"
              style={{ backgroundImage: `url(${item.IMAGE})` }}
            ></div>
            <span>{item.NAME}</span>
          </div>
        </td>
        <td>{item.PHONE_NUMBER}</td>
        <td>{item.ACCOUNT_TYPE}</td>
        <td
          // className={` status ${item.STATUS === "Active" ? "paid" : "cancelled"}`}
          style={{ position: "relative" }}
        >
          {" "}
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>{item.STATUS}</span>
            <div
              className={` userStatus ${
                item.STATUS === "Active" ? "paid" : "cancelled"
              }`}
            ></div>
          </div>
        </td>
        <td>
          <button
            className="tableActionButton"
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
          <button

            className="tableActionButton"
          >
            <FontAwesomeIcon icon={faPen} />
          </button>
          <button
            onClick={() => history.push(`${path}/${item.NAME}`)}
            className="tableActionButton"
          >
            <FontAwesomeIcon icon={faEye} />
          </button>
        </td>
      </tr>
    </>
  );
};
