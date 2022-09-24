import React from "react";

export const BadgeForm = ({
  formValues,
  handleInputChange,
  createNewBadge,
  error,
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
  };

  return (
    <div>
      {error && <div className="alert alert-danger">{error.message}</div>}
      {/* Enlazar eventos */}
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="firstname">First Name</label>
          {/* Convertir los inputs de formulario en elementos controlados por el estado - onChange | value */}
          <input
            type="text"
            className="form-control"
            id="firstname"
            name="firstName"
            onChange={handleInputChange}
            value={formValues.firstName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            name="lastName"
            onChange={handleInputChange}
            value={formValues.lastName}
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
            name="jobTitle"
            onChange={handleInputChange}
            value={formValues.jobTitle}
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
