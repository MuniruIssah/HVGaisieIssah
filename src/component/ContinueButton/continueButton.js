import React from "react";
import { Button, Row, Col } from "reactstrap";
import "./styles.css";
export const ContinueButton = ({ data }) => {
  const buttonClassName =
    data.filter((d) => d.selected === true).length > 0 ? true : false;
  console.log(data);
  return (
    <Row className="row">
      <Col xs={{ size: 10, offset: 1 }} sm="10" md={{ size: 6, offset: 3 }}>
        <button
          className={
            buttonClassName ? "button continueButton active" : "button continueButton"
          }
          disabled={buttonClassName ? false : true}
        >
          Continue
        </button>
      </Col>
    </Row>
  );
};
