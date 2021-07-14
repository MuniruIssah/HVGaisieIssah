import React from "react";
import { Col, Row } from "reactstrap";
import { BackHeader } from "../BackHeader/backHeader";
import "./styles.css";

const GreyForm = (props) => {
  return (
    <Row className="row">
      <Col xs={{ size: 10, offset: 1 }} sm="10" md={{ size: 4, offset: 4 }}>
        <div className="greyForm">
          {props.header&&<BackHeader text={props.header} />}
          {props.children}
          </div>
      </Col>
    </Row>
  );
};

export default GreyForm;
