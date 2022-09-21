import React from "react";
import "./styles/Loader.css";

export const Loader = () => {
  return (
    <div className="Loader__container">
      <div className="Loader">
        <div></div>
        <div></div>
      </div>
      <p>Espere un momento</p>
    </div>
  );
};
