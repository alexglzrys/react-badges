import React from "react";
import "./styles/BadgeError.css";
import astronauta from "../assets/images/Astronaut-Space.png";

export const BadgeError = ({ error }) => {
  return (
    <div className="BadgeError">
      <div className="container">
        <img src={astronauta} alt="Error" className="BadgeError__image" />
        <h4 className="BadgeError__title">Upss!</h4>
        <p className="BadgeError__message">{error.message}</p>
      </div>
    </div>
  );
};
