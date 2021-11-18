import React from "react";
import classes from "./Modal.module.css";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const ErrorModal = (props) => {
  const handleClose = () => {
    props.setShow(false);
  };
  const keyProp = () => Math.ceil((Math.random() + 1) * 10000000);

  const errorArray = props.errorArray.map((error) => (
    <li key={keyProp()}>{error}</li>
  ));
  return (
    <Modal
      bsPrefix={classes.modalContent}
      show={props.show}
      onHide={handleClose}
    >
      <Modal.Header bsPrefix={classes.modalHeader} closeButton>
        <Modal.Title>Errors:</Modal.Title>
      </Modal.Header>
      <Modal.Body bsPrefix={classes.modalBody}>{errorArray}</Modal.Body>
      <Modal.Footer bsPrefix={classes.modalFooter}>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorModal;
