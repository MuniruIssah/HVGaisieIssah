import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareUp,
  faFilePdf,
} from "@fortawesome/free-regular-svg-icons";
import close from "../../assets/closeIcon.png";
import print from "../../assets/print.png";
import pdf from "../../assets/pdf.png";

import { faPrint, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
const Invoice = ({onClose}) => {
  return (
    <div>
      <InvoiceHeader onClose={onClose} />
      <InvoiceIssueStrip />
      <InvoiceAddressStrip />
      <InvoiceItemList />
      <InvoiceLabelAndValueItem label="Sub Total" />
      <InvoiceLabelAndValueItem label="Shipping" value="₵100" />
      <InvoiceLabelAndValueItem label="Tax" value="₵50" />
      <InvoiceStatus />
    </div>
  );
};

export default Invoice;

const InvoiceHeader = ({onClose}) => {
  return (
    <header className="invoiceHeader">
      <div className="invoiceIDDiv">
        <span>Invoice ID</span>
        <span>135 546</span>
      </div>
      
      <div className="invoiceHeaderButtons">
        <button>
          <div
            className="eyecons"
            style={{ backgroundImage: `url(${pdf})`, width: 20, height: 18 }}
          ></div>
        </button>
        <button>
          <div
            className="eyecons"
            style={{ backgroundImage: `url(${print})`, width: 18, height: 18 }}
          ></div>
        </button>
      </div>
      <div
        className="eyecons"
        onClick={onClose}
        style={{ backgroundImage: `url(${close})`, width: 21, height: 21 }}
      ></div>
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

const InvoiceLabelAndValueItem = ({ label = "Label", value = "₵723" }) => {
  return (
    <div className="invoiceLabelAndValueItem">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
};

const InvoiceStatus = ({ status = "Paid", amount = "₵873" }) => {
  return (
    <div className="invoiceStatus">
      <div className="orderBlock">
        <span>Order Amount</span>
        <span>{amount}</span>
      </div>
      <span className="statusBlock">{status}</span>
    </div>
  );
};
