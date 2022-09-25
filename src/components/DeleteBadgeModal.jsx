import React from "react";
import { Modal } from "./Modal";
import "./styles/DeleteBadgeModal.css";

/**
 * Toda la lógica para abrir y cerrar el modal está gestionada por el BadgeDetailsContainer
 * así como para borrar un badge
 */

// Composición del commponente Modal (Modal es un componente genérico, DeleteBadgeModal es más específico)
export const DeleteBadgeModal = ({
  isOpen,
  handleCloseModal,
  handleDeleteBadge,
}) => {
  return (
    <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
      <div className="DeleteBadgeModal">
        <h1>¿Estas seguro?</h1>
        <p>Esta acción eliminará el badge del sistema</p>
        <div>
          <button className="btn btn-danger me-4" onClick={handleDeleteBadge}>
            Eliminar
          </button>
          <button onClick={handleCloseModal} className="btn btn-primary">
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  );
};
