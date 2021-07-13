import React from "react";
import { Col, Row } from "reactstrap";
import "./styles.css";

const GreyForm = (props) => {
  return (
    <Row className="row">
      <Col xs={{ size: 10, offset: 1 }} sm="10" md={{ size: 4, offset: 4 }}>
        <div className="greyForm">{props.children}</div>
      </Col>
    </Row>
  );
};

export default GreyForm;
