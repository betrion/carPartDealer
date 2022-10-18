import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const SecondStep = ({
  options,
  setOptions,
  register,
  errors,
  watch,
  handleSubmit,
  handleData,
  modalPage,

  decrementPage,
  incrementPage,
}) => {
  const [showCoupon, setShowCoupon] = useState(false);
  const watchUsluge = watch("usluge");
  const watchCoupon = watch("kupon");
  const sumUsluge = () => {
    if (watchUsluge) {
      const toBeDone = [];
      for (let i = 0; i < watchUsluge.length; i++) {
        let pushElement = watchUsluge[i].split(",");
        console.log("pushy", pushElement);
        toBeDone.push(pushElement[1]);
      }
      const outputResult = toBeDone.reduce(
        (partialSum, a) => Number(partialSum) + Number(a),
        0
      );
      // setOptions((prev) => ({
      //   ...prev,
      //   chosen: { ...prev.chosen, total: outputResult },
      // }));
      if (options.podaci.kupon) {
        console.log("kupon..", watchCoupon);
        // setOptions((prev) => ({
        //   ...prev,
        //   chosen: { ...prev.chosen, kuponValue: outputResult * (1 - 0.7) },
        // }));
        return (
          <>
            <p>Osnovica: {outputResult.toFixed(2)} kn </p>
            <p>Popust (30%): {(outputResult * (1 - 0.7)).toFixed(2)}kn</p>
            <p>Ukupno: {(outputResult * (1 - 0.3)).toFixed(2)} kn</p>
          </>
        );
      }
      return outputResult > 0 ? `Ukupno: ${outputResult.toFixed(2)} kn` : "";
    }
  };
  const applyCoupon = () => {
    if (options.validCoupons.includes(watchCoupon)) {
      setOptions((prev) => ({
        ...prev,
        podaci: { ...prev.podaci, kupon: true },
      }));
      setShowCoupon(false);
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(handleData)} onChange={sumUsluge}>
        <Form.Group className="mb-3" id="usluge">
          <Form.Label hidden>Odaberite jednu ili više usluga</Form.Label>
          {options.usluge.map((usluga) => (
            <Form.Check
              onChange={sumUsluge}
              inline
              key={usluga.id}
              type="checkbox"
              name={`${usluga.id}`}
              label={`${usluga.id} (${usluga.cijena} kn)`}
              value={[usluga.id, usluga.cijena]}
              ref={register}
              {...register(`usluge`, { required: true })}
            />
          ))}
        </Form.Group>
        <div className="d-flex flex-row-reverse">
          <div className="d-flex flex-column">
            <small>
              {!showCoupon && !options.podaci.kupon && (
                <a href="#" onClick={setShowCoupon}>
                  Imam kupon
                </a>
              )}
              {showCoupon && (
                <>
                  <input
                    type="text"
                    name="kupon"
                    id="kupon"
                    ref={register}
                    {...register("kupon", { required: true })}
                  />
                  <Button onClick={applyCoupon}>Primjeni</Button>
                </>
              )}
              {options.podaci.kupon && (
                <p style={{ color: "green" }}>
                  Hvala, unijeli ste ispravan kod kupona.
                </p>
              )}
            </small>

            <h3>{sumUsluge()}</h3>
          </div>
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
      </Form>
      {/* <p>{sumUsluge()}</p> */}

      {/* <Total {...{ options, register, errors, watch, usluge }} /> */}

      {errors.usluge && (
        <Alert className="alert alert-warning" role={"alert"}>
          Odabir bar jedne usluge je obavezan!
        </Alert>
      )}
    </div>
  );
};

export default SecondStep;
