import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareUp,
  faFilePdf,
} from "@fortawesome/free-regular-svg-icons";
import { faPrint, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
const Invoice = () => {
  return (
    <div>
      <InvoiceHeader />
      <InvoiceIssueStrip />
      <InvoiceAddressStrip />
      <InvoiceItemList />
    </div>
  );
};

export default Invoice;

const InvoiceHeader = () => {
  return (
    <header className="invoiceHeader">
      <div className="invoiceIDDiv">
        <span>Invoice ID</span>
        <span>135 546</span>
      </div>
      <div className="invoiceHeaderButtons">
        <button>
          <FontAwesomeIcon icon={faFilePdf} />
        </button>
        <button>
          <FontAwesomeIcon icon={faPrint} />
        </button>
      </div>
      <FontAwesomeIcon className="invoiceClose" icon={faTimes} />
    </header>
  );
};

const InvoiceIssueStrip = () => {
  return (
    <section className="invoiceIssueStrip">
      <div className="issueInfo">
        <span>Issued on</span>
        <span>April 13, 2021 22:21</span>
      </div>
      <div className="appLogoSection"></div>
    </section>
  );
};

const InvoiceAddressStrip = () => {
  return (
    <section className="invoiceAddressStrip">
      <div>
        <span>Invoice to</span>
        <span>John Michael</span>
        <span>Tetteh Ashong Street,Accra 00233 Ghana GA-202-4895</span>
      </div>
      <div>
        <span>Tetteh Ashong Street,Accra 00233 Ghana GA-202-4895</span>
      </div>
    </section>
  );
};

const dummyList = [
  {
    item: "Aluminium Aldrop",
    qty: 2,
    price: "₵250",
    total: "₵500",
  },
  {
    item: "Ball Bearing Drawer Slides",
    qty: 1,
    price: "₵123",
    total: "₵123",
  },
  {
    item: "Mild Steel Angle",
    qty: 2,
    price: "₵50",
    total: "₵100",
  },
];
const InvoiceItemList = ({ list = dummyList }) => {
  const header = Object.keys(list[0]);
  return (
    <section className="invoiceItemList">
      <table className="invoiceItemListTable">
        <tr>
          {header.map((item) => (
            <th className="invoiceItemListTableHeadItem" key={item}>
              {item}
            </th>
          ))}
        </tr>
        {list.map((item) => (
          <tr className="invoiceItemListTableContentItem">
            <td>{item.item}</td>
            <td>{item.qty}</td>
            <td>{item.price}</td>
            <td>{item.total}</td>
          </tr>
        ))}
      </table>
    </section>
  );
};
