import React, { useState } from "react";
import "./styles.css";
import { Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import deleteIcon from "../../../../assets/delete.svg"
import editIcon from "../../../../assets/edit.svg"
import eyeIcon from "../../../../assets/eye.svg"

import DataListModal from "../../../DataListInvoiceModal/DataListInvoiceModal";
import Invoice from "../../../Invoice/Invoice";
import { faCheck, faPen, faPenAlt } from "@fortawesome/free-solid-svg-icons";
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
  const [checked, setChecked] = useState(false);
  return (
    <tr className="tableHeader">
      <th>
        {!checked ? (
          <div
            className="tableCheck"
            onClick={() => {
              setChecked(true);
            }}
          ></div>
        ) : (
          <div
            className="tableChecked"
            onClick={() => {
              setChecked(false);
            }}
          >
            <FontAwesomeIcon
              icon={faCheck}
              style={{ fontSize: 11, color: "white" }}
            />
          </div>
        )}
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

const FinanceDataListTableItem = ({ item ,checkAll}) => {
  const [visible, setVisible] = useState(false);
  const { path } = useRouteMatch();
  const history = useHistory();
  const [checked, setChecked] = useState(false);
  return (
    <>
      <tr className="dataListTableItem" onClick={() => setChecked(!checked)}>
        <td>
          {!checked ? (
            <div
              className="tableCheck"
              onClick={() => {
                setChecked(true);
              }}
            ></div>
          ) : (
            <div
              className="tableChecked"
              onClick={() => {
                setChecked(false);
              }}
            >
              <FontAwesomeIcon
                icon={faCheck}
                style={{ fontSize: 11, color: "white" }}
              />
            </div>
          )}
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
          <button className="tableActionButton" style={{backgroundImage:`url(${deleteIcon})`,backgroundSize:12}}>
            
          </button>
          <button className="tableActionButton" style={{backgroundImage:`url(${editIcon})`,backgroundSize:15}}>
          
          </button>
          <button
          style={{backgroundImage:`url(${eyeIcon})`,backgroundSize:15}}
            onClick={() => history.push(`${path}/${item.NAME}`)}
            className="tableActionButton"
          >
           
          </button>
        </td>
      </tr>
    </>
  );
};
