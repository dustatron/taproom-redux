import React from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";

function DeleteConfirm(props) {
  function onDeleteClick() {
    props.onDeleteClick();
    props.onClose();
  }
  return (
    <div className="DeleteConfirm">
      <Modal show={props.show} onHide={props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete {props.beer}?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This action can not be undone.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClose}>
            Close
          </Button>
          <Button variant="danger" onClick={onDeleteClick}>
            Delete Beer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteConfirm;

DeleteConfirm.propTypes = {
  beer: PropTypes.string,
  onClose: PropTypes.func,
  show: PropTypes.bool
};
