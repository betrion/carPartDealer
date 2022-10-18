import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import Success from "./Success";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";

const OrderModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalPage, setModalPage] = useState(1);
  const [options, setOptions] = useState({
    vozila: [
      "Peugeot",
      "VolksWagen",
      "Citroen",
      "Audi",
      "Bmw",
      "Seat",
      "Alfa Romeo",
      "Kia",
      "Hyundai",
      "Honda",
      "Toyota",
    ],
    usluge: [
      { id: "zamjena ulja i filtera", cijena: 500 },
      { id: "promjena guma", cijena: 100 },
      { id: "promjena pakni", cijena: 450 },
      { id: "servis klima uređaja", cijena: 299 },
      { id: "balansiranje guma", cijena: 50 },
      { id: "zamjena ulja u kočnicama", cijena: 229 },
    ],
    validCoupons: ["tokic123", "prta", "dejo"],
    podaci: {
      ime: "",
      prezime: "",
      email: "",
      tel: "",
      napomena: "",
      kupon: false,
      kuponValue: "",
      total: "",
    },
    chosen: {},
  });
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const pageTitles = [
    "1. Korak - Odaberite proizvođača vašeg vozila",
    "2. Korak - Odaberite jednu ili više usluga",
    "3. Korak - Vaši podaci",
    "4. Korak - Pregled vaše narudžbe",
  ];

  const handleData = (chosen) => {
    console.log("data: ", chosen);
    if (!errors.vozilo || !errors.usluge) {
      setOptions((prev) => ({
        ...prev,
        chosen,
      }));
      incrementPage();
    }
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const decrementPage = () => setModalPage((prev) => prev - 1);
  const incrementPage = () => setModalPage((prev) => prev + 1);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Složi konfiguraciju
      </Button>

      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{pageTitles[modalPage - 1]}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalPage === 1 && (
            <FirstStep
              {...{
                options,
                register,
                errors,
                watch,
                handleSubmit,
                handleData,
                modalPage,
              }}
            />
          )}
          {modalPage === 2 && (
            <SecondStep
              {...{
                options,
                setOptions,
                register,
                errors,
                watch,
                handleSubmit,
                handleData,
                modalPage,

                decrementPage,
              }}
            />
          )}
          {modalPage === 3 && (
            <ThirdStep
              {...{
                handleClose,
                handleSubmit,
                handleData,
                register,
                modalPage,
                decrementPage,
              }}
            />
          )}
          {modalPage === 4 && (
            <FourthStep
              {...{
                handleClose,
                options,
                modalPage,
                setModalPage,
                decrementPage,
                incrementPage,
              }}
            />
          )}
        </Modal.Body>
      </Modal>
      {modalPage == 5 && (
        <Success
          {...{
            handleClose,
            handleSubmit,
            handleData,
            modalPage,

            decrementPage,
          }}
        />
      )}
    </>
  );
};
export default OrderModal;
