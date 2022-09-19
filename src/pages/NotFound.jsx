import React from "react";
import { Link } from "react-router-dom";
import Astronauta from "../assets/images/Astronaut-Space.png";
import "./styles/NotFound.css";

export const NotFound = () => {
  return (
    <div className="NotFound">
      <img
        src={Astronauta}
        alt="Logotipo Astronauta"
        className="NotFound__image"
      />
      <h3 className="NotFound__title">Página no encontrada</h3>
      <p className="NotFound__description">
        Hemos llegado al universo 404 y no encontramos lo que buscabas
      </p>
      <Link to="/" className="NotFound__button btn btn-primary">
        Regresar al Home
      </Link>
    </div>
  );
};
