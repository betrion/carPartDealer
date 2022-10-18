import React from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const FirstStep = ({
  options,
  register,
  errors,
  handleSubmit,
  handleData,
  modalPage,
  decrementPage,
  incrementPage,
}) => {
  return (
    <div>
      <Form onSubmit={handleSubmit(handleData)}>
        <Form.Group className="mb-3" id="vozilo">
          <Form.Label hidden>Unesite Model Vozila</Form.Label>
          {options.vozila.map((vozilo) => (
            <Form.Check
              inline
              key={vozilo}
              type="radio"
              name="vozilo"
              label={vozilo}
              value={vozilo}
              ref={register}
              {...register("vozilo", { required: true })}
            />
          ))}
        </Form.Group>
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
      </Form>
      {errors.vozilo && (
        <Alert className="alert alert-warning" role={"alert"}>
          Odabir vozila je obavezan!
        </Alert>
      )}
    </div>
  );
};

export default FirstStep;
