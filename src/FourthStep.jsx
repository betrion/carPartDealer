import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
const FourthStep = ({
  options,

  modalPage,
  setModalPage,
  decrementPage,
  incrementPage,
}) => {
  const setModalNumber = (e) => {
    setModalPage(Number(e.target.value));
  };
  return (
    <>
      <div className="d-flex" style={{ gap: "1rem" }}>
        <Card>
          <div className="card-title  d-flex">
            <div className="card-body">
              <h5 className="card-title d-inline">MODEL VOZILA</h5>
              <Button
                className="d-inline btn-sm"
                variant="outline-dark"
                onClick={setModalNumber}
                value="1"
              >
                Uredi
              </Button>
              <p className="card-text">{options.chosen.vozilo}</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="card-title">
            <div className="card-body">
              <h5 className="card-title d-inline">ODABRANE USLUGE</h5>
              <Button
                className="d-inline btn-sm"
                variant="outline-dark"
                onClick={setModalNumber}
                value="2"
              >
                Uredi
              </Button>
            </div>
            {options.chosen.usluge &&
              options.chosen.usluge.map((usluga) => (
                <p className="card-text " key={usluga}>
                  {usluga} kn <br />
                </p>
              ))}
          </div>
        </Card>
      </div>
      <div>
        <Card>
          <div className="card-title  d-flex flex-row">
            <div className="card-body">
              <h5 className="card-title d-inline">KONTAKT PODACI</h5>
              <Button
                className="d-inline btn-sm"
                variant="outline-dark"
                onClick={setModalNumber}
                value="3"
              >
                Uredi
              </Button>
              <p className="card-text">
                Ime i prezime: {options.chosen.ime}
                <br /> Email: {options.chosen.email}
                <br /> telefon: {options.chosen.tel}
              </p>
            </div>
            <p>
              <h5>{options.chosen.napomena ? "Napomena" : "Nema napomena"}</h5>
              <br /> {options.chosen.napomena}
            </p>
          </div>
        </Card>
        <Modal.Footer>
          {modalPage > 1 && (
            <Button variant="secondary" onClick={decrementPage}>
              Nazad
            </Button>
          )}
          <Button onClick={incrementPage}>Pošalji</Button>
        </Modal.Footer>
      </div>
    </>
  );
};

export default FourthStep;
