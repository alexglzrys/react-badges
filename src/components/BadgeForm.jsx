import React from "react";

export const BadgeForm = ({
  formValues,
  handleInputChange,
  createNewBadge,
}) => {
  /**
   * El estado interno de este componente está gestionado por la página BadgeNew
   * Ya que los datos ingresados en el formulario, se deben ver reflejados de forma reactiva en el componetne Badge
   * Esto se le conoce como levantamiento del estado, es decir, situarlo lo más arriba posible para que los componentes que hagan uso del mismo lo puedan consumir.
   */

  // Manejandor de envío de formulario
  const handleFormSubmit = (event) => {
    event.preventDefault();
    createNewBadge();
    console.log("Formulario enviado");
  };

  return (
    <div>
      <h1>New Attendant</h1>
      {/* Enlazar eventos */}
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="firstname">First Name</label>
          {/* Convertir los inputs de formulario en elementos controlados por el estado - onChange | value */}
          <input
            type="text"
            className="form-control"
            id="firstname"
            name="firstname"
            onChange={handleInputChange}
            value={formValues.firstname}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="lastname"
            onChange={handleInputChange}
            value={formValues.lastname}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={handleInputChange}
            value={formValues.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname">Job Title</label>
          <input
            type="text"
            className="form-control"
            id="jobtitle"
            name="jobtitle"
            onChange={handleInputChange}
            value={formValues.jobtitle}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastname">Twitter</label>
          <input
            type="text"
            className="form-control"
            id="twitter"
            name="twitter"
            onChange={handleInputChange}
            value={formValues.twitter}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Save
        </button>
      </form>
    </div>
  );
};
