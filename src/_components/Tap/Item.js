import React from "react";
import { Card, ListGroup, Button, Col, Row } from "react-bootstrap";

function TapItem(props) {
  function onMinusClick() {
    props.onMinusClick(props.count);
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>
          [{props.count + 1}] {props.beer} by {props.brewery}{" "}
        </Card.Title>
        <Card.Text>
          <Row>
            <Col md={12} lg={8}>
              <ListGroup horizontal>
                <ListGroup.Item> ${props.price}</ListGroup.Item>
                <ListGroup.Item>{props.aContent}% ac </ListGroup.Item>
                <ListGroup.Item>{props.pints} Remaining</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={12} lg={4}>
              <Button variant="info" className="btn-block" onClick={onMinusClick}>
                -1 Pint
              </Button>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TapItem;
