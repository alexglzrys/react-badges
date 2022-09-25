import React from "react";
import ReactDOM from "react-dom";
import "./styles/Modal.css";

export const Modal = ({ children, isOpen, handleCloseModal }) => {
  // JSX a renderizar en el portal
  const ModalContainer = () => {
    if (!isOpen) return null;
    return (
      <div className="Modal">
        <div className="Modal__container">
          <button className="Modal__close-button" onClick={handleCloseModal}>
            x
          </button>
          {/* Pasar children a un componente, permite hacer composición del mismo en uno más específico */}
          {children}
        </div>
      </div>
    );
  };

  // Crear un portal para colocar información fuera del ámbito de la aplicación
  return ReactDOM.createPortal(
    <ModalContainer />,
    document.getElementById("modal")
  );
};
