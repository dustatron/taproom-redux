import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

function KegEdit(props) {
  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onformEditClick({
      beer: event.target.beer.value,
      brewery: event.target.brewery.value,
      price: event.target.price.value,
      aContent: event.target.aContent.value,
      pints: event.target.pints.value,
      id: props.keg.id,
      createAt: props.keg.createAt
    });
  }
  function handleAddNewKegClick() {
    props.onAddKegClick();
  }

  return (
    <div className="KegEdit top-margin-med">
      <h1 className="text-center tap-header"> KegEdit </h1>
      <Card>
        <Card.Body>
          <Form onSubmit={handleEditKegFormSubmission}>
            <Form.Group controlId="newKeg">
              <Form.Label>Beer Name</Form.Label>
              <Form.Control type="text" name="beer" defaultValue={props.keg.beer} />
            </Form.Group>

            <Form.Group controlId="newKeg">
              <Form.Label>Brewery</Form.Label>
              <Form.Control type="text" name="brewery" defaultValue={props.keg.brewery} />
            </Form.Group>

            <Form.Group controlId="newKeg">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" name="price" defaultValue={props.keg.price} />
            </Form.Group>

            <Form.Group controlId="newKeg">
              <Form.Label>Alcohol Content</Form.Label>
              <Form.Control type="text" name="aContent" defaultValue={props.keg.aContent} />
            </Form.Group>

            <Form.Group controlId="newKeg">
              <Form.Label>Pints Remaining</Form.Label>
              <Form.Control type="text" name="pints" defaultValue={props.keg.pints} />
            </Form.Group>

            <Button className="btn-block" variant="danger" type="submit">
              Update
            </Button>
          </Form>
          <Button
            className="btn-block top-margin--med"
            variant="secondary"
            type="submit"
            onClick={handleAddNewKegClick}
          >
            Add Keg
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default KegEdit;

KegEdit.propTypes = {
  keg: PropTypes.func,
  onformEditClick: PropTypes.func,
  onAddKegClick: PropTypes.func
};
