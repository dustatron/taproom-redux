import React from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import PropTypes from "prop-types";

function KegDetails(props) {
  return (
    <div className="KegDetails">
      <h1 className="text-center"> Keg Details </h1>
      <Card>
        <Card.Header>{props.keg.beer}</Card.Header>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item>{props.keg.brewery}</ListGroup.Item>
            <ListGroup.Item>{props.keg.price}</ListGroup.Item>
            <ListGroup.Item>{props.keg.aContent}</ListGroup.Item>
            <ListGroup.Item>{props.keg.pints}</ListGroup.Item>
            <ListGroup.Item>{props.keg.id}</ListGroup.Item>
          </ListGroup>
          <Button className="btn-block" variant="warning">
            {" "}
            Edit{" "}
          </Button>
          <Button className="btn-block" variant="success">
            {" "}
            Okay{" "}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default KegDetails;

KegDetails.propTypes = {
  key: PropTypes.object
};
