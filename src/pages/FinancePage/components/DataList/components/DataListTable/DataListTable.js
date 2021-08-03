import React, { useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import DataListModal from "../DataListModal/DataListModal";
const dummyList = [
  {
    INVOICE_ID: "wwwww",
    CUSTOMER: "Issah",
    DATE: "29292939",
    DRIVER: "Kwame",
    STATUS: "Paid",
    PAYMENT_TYPE: "Cash",
    AMOUNT: "$4994",
  },
  {
    INVOICE_ID: "wwwww",
    CUSTOMER: "Issah",
    DATE: "29292939",
    DRIVER: "Kwame",
    STATUS: "Paid",
    PAYMENT_TYPE: "Cash",
    AMOUNT: "$4994",
  },
  {
    INVOICE_ID: "wwwww",
    CUSTOMER: "Issah",
    DATE: "29292939",
    DRIVER: "Kwame",
    STATUS: "Paid",
    PAYMENT_TYPE: "Cash",
    AMOUNT: "$4994",
  },
];
const DataListTable = ({ list = dummyList }) => {
  return (
    <table className="dataListTable">
      <FinanceDataListTableHeader headerList={Object.keys(list[0])} />
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
  return (
    <>
      <tr className="dataListTableItem">
        <td>
          <div className="tableCheck"></div>
        </td>
        <td>{item.INVOICE_ID}</td>
        <td>{item.CUSTOMER}</td>
        <td>{item.DATE}</td>
        <td>{item.DRIVER}</td>
        <td>{item.STATUS}</td>
        <td>{item.PAYMENT_TYPE}</td>
        <td>{item.AMOUNT}</td>
        <td>
          <button
            onClick={() => setVisible(true)}
            className="tableActionButton"
          >
            <FontAwesomeIcon icon={faEye} />
          </button>
        </td>
      </tr>
      <DataListModal visible={visible} onClose={() => setVisible(false)} />
    </>
  );
};
