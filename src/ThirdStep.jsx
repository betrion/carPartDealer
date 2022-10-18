import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const ThirdStep = ({
  register,
  handleSubmit,
  handleData,
  modalPage,

  decrementPage,
  incrementPage,
}) => {
  return (
    <div>
      <Form onSubmit={handleSubmit(handleData)}>
        <Form.Group className="mb-3" id="kontaktPodaci">
          <Form.Label hidden>Vaši kontakt podaci</Form.Label>
          <div className="d-flex mb-3" style={{ gap: "1rem" }}>
            <Form.Control
              type="text"
              placeholder="Ime i prezime"
              {...register("ime", { required: true })}
            ></Form.Control>
            <Form.Control
              type="email"
              placeholder="Email adresa*"
              name="email"
              {...register("email", { required: true })}
            ></Form.Control>
          </div>
          <div className="d-flex" style={{ gap: "1rem" }}>
            <Form.Control
              type="tel"
              placeholder="Broj mobitela*"
              {...register("tel", { required: true })}
            ></Form.Control>

            <Form.Control
              as="textarea"
              placeholder="Napomena (opcionalno)"
              {...register("napomena", { required: false })}
            ></Form.Control>
          </div>
          <Modal.Footer>
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
        </Form.Group>
      </Form>
    </div>
  );
};

export default ThirdStep;
