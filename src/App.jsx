import React from "react";
import logo from "./images/logo.jpg";
import OrderModal from "./OrderModal";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container">
      <Navbar
        className="navbar navbar-light justify-content-center flex-sm-row flex-column flex-wrap"
        style={{ backgroundColor: "#81d6d9" }}
      >
        <img
          src={logo}
          className="navbar-brand"
          style={{ width: 150 }}
          alt=""
        ></img>
        <div className="navbar-brand">
          <h1>Konfigurator servisa</h1>
          <h4>Izračunaj trošak</h4>
        </div>
        <OrderModal />
      </Navbar>

      <section></section>
    </div>
  );
};

export default App;
