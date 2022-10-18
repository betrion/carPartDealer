import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Success = ({
  handleClose,
  handleSubmit,
  handleData,
  modalPage,
  setModalPage,
  incrementPage,
  decrementPage,
}) => (
  <div>
    <Modal show={true} centered onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Vaša prijava je uspješno poslana!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Vaša prijava je uspješno poslana i zaprimljena. Kontaktirat ćemo Vas u
          najkraćem roku.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Zatvori</Button>
        {modalPage > 1 && (
          <Button variant="secondary" onClick={decrementPage}>
            Nazad
          </Button>
        )}
        {modalPage < 4 && (
          <Button variant="primary" type="submit">
            Dalje
          </Button>
        )}
        {modalPage == 4 && (
          <Button variant="primary" onClick={incrementPage}>
            Pošalji
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  </div>
);

export default Success;
