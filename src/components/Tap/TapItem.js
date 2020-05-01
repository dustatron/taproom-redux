import React from 'react';
import { Card, ListGroup, Button, Col, Row, Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

//Handle Click functions
function TapItem(props) {
  function onMinusClick() {
    props.onMinusClick(props.id);
  }

  function onBeerTitleClick() {
    props.onShowBeerDetail(props.id);
  }

  //branching varables
  let stock;
  let priceColor;

  //Alert Checks
  if (props.pints < 11 && props.pints > 0) {
    stock = <Alert variant="warning">Almost Empty</Alert>;
  } else if (props.pints <= 0) {
    stock = <Alert variant="danger">OUT OF STOCK</Alert>;
  }

  //Price labeling
  if (props.price < 4 && props.price > 0) {
    priceColor = 'success';
  } else if (props.price < 8 && props.price > 4) {
    priceColor = 'warning';
  } else if (props.price < 11 && props.price > 8) {
    priceColor = 'info';
  } else {
    priceColor = 'secondary';
  }

  return (
    <Card className="bottom-margin--med">
      <Card.Body>
        <Card.Title onClick={onBeerTitleClick} className="keg-details">
          <span className="beer-title">{props.beer} </span> by {props.brewery}
          {stock}
        </Card.Title>
        <Card.Text>
          <Row>
            <Col md={12} lg={8} onClick={onBeerTitleClick}>
              <ListGroup horizontal className="keg-details">
                <ListGroup.Item className={'bg-' + priceColor}> ${props.price}</ListGroup.Item>
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

TapItem.propTypes = {
  beer: PropTypes.string,
  brewery: PropTypes.string,
  price: PropTypes.number,
  aContent: PropTypes.number,
  pints: PropTypes.number,
  id: PropTypes.string,
  onShowBeerDetail: PropTypes.func
};

export default TapItem;
