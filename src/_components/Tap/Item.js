import React from "react";
import { Card, ListGroup, Button, Col, Row, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

function TapItem(props) {
  function onMinusClick() {
    props.onMinusClick(props.count);
  }

  function onBeerTitleClick() {
    props.onShowBeerDetail(props.id);
  }
  let stock;
  if (props.pints < 10 && props.pints > 0) {
    stock = <Alert variant="warning">Almost Out!</Alert>;
  } else if (props.pints <= 0) {
    stock = <Alert variant="danger">OUT OF STOCK</Alert>;
  }

  return (
    <Card className="bottom-margin--med">
      <Card.Body>
        <Card.Title onClick={onBeerTitleClick} className="keg-details">
          [{props.count + 1}] {props.beer} by {props.brewery}
          {stock}
        </Card.Title>
        <Card.Text>
          <Row>
            <Col md={12} lg={8} onClick={onBeerTitleClick}>
              <ListGroup horizontal className="keg-details">
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
