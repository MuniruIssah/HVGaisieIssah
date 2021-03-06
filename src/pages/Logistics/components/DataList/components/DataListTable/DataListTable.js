import React, { useState } from "react";
import "./styles.css";
import { Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import deleteIcon from "../../../../assets/delete.svg";
import editIcon from "../../../../assets/edit.svg";
import eyeIcon from "../../../../assets/eye.svg";

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
const DataListTable = ({
  list = dummyList,
  allowSelect,
  image,
  showProfileImage,
  actions,
}) => {
  return (
    <table className="ldataListTable">
      <FinanceDataListTableHeader
        allowSelection={allowSelect}
        headerList={["NAME", "PHONE NUMBER", "ACCOUNT TYPE", "STATUS"]}
        image={image}
        actions={actions}
      />
      <FinanceDataListTableMain
        actions={actions}
        showProfileImage={showProfileImage}
        list={list}
        allowSelection={allowSelect}
        image={image}
      />
    </table>
  );
};

export default DataListTable;

const FinanceDataListTableHeader = ({
  headerList,
  allowSelection,
  image,
  actions,
}) => {
  console.log(headerList);
  const [checked, setChecked] = useState(false);
  return (
    <tr className="tableHeader">
      {allowSelection && (
        <th style={{ width: "5em" }}>
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
      )}
      {image && <th>IMAGE</th>}
      {headerList.map((item) => (
        <th key={item}>{item}</th>
      ))}
      {actions && <th>Action</th>}
    </tr>
  );
};

const FinanceDataListTableMain = ({
  list,
  allowSelection,
  actions,
  showProfileImage,
  image,
}) => {
  return (
    <tbody className="tableBody">
      {list.map((item) => (
        <FinanceDataListTableItem
          showProfileImage={showProfileImage}
          item={item}
          image={image}
          actions={actions}
          allowSelection={allowSelection}
        />
      ))}
    </tbody>
  );
};

const FinanceDataListTableItem = ({
  item,
  allowSelection,
  showProfileImage,
  actions,
  image,
}) => {
  const [visible, setVisible] = useState(false);
  const { path } = useRouteMatch();
  const history = useHistory();
  const [checked, setChecked] = useState(false);
  return (
    <>
      <tr className="ldataListTableItem" onClick={() => setChecked(!checked)}>
        {allowSelection && (
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
        )}
        {image && (
          <td style={{ width: "5em" }}>
            <div
              className="boxAvatar"
              style={{ backgroundImage: `url(${item.IMAGE})` }}
            ></div>
          </td>
        )}
        <td>
          <div className="username">
            {showProfileImage && (
              <div
                className="avatar"
                style={{ backgroundImage: `url(${item.IMAGE})` }}
              ></div>
            )}
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
        {actions && (
          <td>
            {actions.map((action, index) => (
              <button
                key={index}
                onClick={()=>action.action(item.NAME)}
                className="tableActionButton"
                style={{
                  backgroundImage: `url(${action.icon})`,
                  backgroundSize: action.size,
                }}
              ></button>
            ))}
          </td>
        )}
      </tr>
    </>
  );
};

/* <button
            className="tableActionButton"
            style={{
              backgroundImage: `url(${deleteIcon})`,
              backgroundSize: 12,
            }}
          ></button>
          <button
            className="tableActionButton"
            style={{ backgroundImage: `url(${editIcon})`, backgroundSize: 15 }}
          ></button>
          <button
            style={{ backgroundImage: `url(${eyeIcon})`, backgroundSize: 15 }}
            onClick={() => history.push(`${path}/${item.NAME}`)}
            className="tableActionButton"
          ></button> */
