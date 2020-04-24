import React from "react";
import { Card, ListGroup, Button, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";

function TapItem(props) {
  function onMinusClick() {
    props.onMinusClick(props.count);
  }

  function onBeerTitleClick() {
    props.onShowBeerDetail(props.id);
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title onClick={onBeerTitleClick}>
          [{props.count + 1}] {props.beer} by {props.brewery}{" "}
        </Card.Title>
        <Card.Text>
          <Row>
            <Col md={12} lg={8} onClick={onBeerTitleClick}>
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

TapItem.propTypes = {
  beer: PropTypes.string,
  brewery: PropTypes.string,
  price: PropTypes.number,
  aContent: PropTypes.number,
  pints: PropTypes.number,
  id: PropTypes.string,
  onShowBeerDetail: PropTypes.func
};
