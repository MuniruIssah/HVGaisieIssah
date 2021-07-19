import React from 'react'
import { Col, Row } from 'reactstrap';
import "./styles.css";
const SuccessCard = ({children}) => {
    return (
        <Row className="formRow">
        <Col xs={{ size: 10, offset: 1 }} sm="10" md={{ size: 6, offset: 3 }}>
          <div className="successWrapper">{children}</div>
        </Col>
      </Row>
    )
}

export default SuccessCard
