import React from "react";
import { Card, Form, Button, Modal } from "react-bootstrap";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function KegAdd(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.formSubmissionHandler({
      beer: event.target.beer.value,
      brewery: event.target.brewery.value,
      price: event.target.price.value,
      aContent: event.target.aContent.value,
      pints: 124,
      id: v4(),
      createAt: Date.now()
    });
  }

  return (
    <div className="KegAdd top-margin-med">
      <h1 className="text-center tap-header"> NEW KEG </h1>
      <Card>
        <Card.Body>
          <Form onSubmit={handleNewKegFormSubmission}>
            <Form.Group controlId="newKeg">
              <Form.Label>Beer Name</Form.Label>
              <Form.Control type="text" name="beer" placeholder="Whats the name?" />
            </Form.Group>

            <Form.Group controlId="newKeg">
              <Form.Label>Brewery</Form.Label>
              <Form.Control type="text" name="brewery" placeholder="Where did it come from?" />
            </Form.Group>

            <Form.Group controlId="newKeg">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" name="price" placeholder="Cost per pint" />
            </Form.Group>

            <Form.Group controlId="newKeg">
              <Form.Label>Alcohol Content</Form.Label>
              <Form.Control type="text" name="aContent" placeholder="Percentage of alcohol" />
            </Form.Group>

            <Button className="btn-block" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

KegAdd.propTypes = {
  formSubmissionHandler: PropTypes.func
};

export default KegAdd;
