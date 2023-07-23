import React from "react";
import { Modal, Button } from "react-bootstrap";
/**
 * @author
 * @function NewModal
 **/

const NewModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      backdrop="static"
      keyboard={false}
      size={props.size}
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={props.saveChanges}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default NewModal;
