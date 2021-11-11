import React from "react";
import classes from "./Modal.module.css";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";


const ErrorModal = (props) => {

  const handleClose = () => {props.setShow(false)};

  return (
    <Modal bsPrefix={classes.modalContent} show={props.show} onHide={handleClose} >
      <Modal.Header bsPrefix={classes.modalHeader} closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body bsPrefix={classes.modalBody}>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer bsPrefix={classes.modalFooter}>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorModal;
