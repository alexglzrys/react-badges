import React from "react";

export const BadgeForm = () => {
  // Manejador de inputs controlados
  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    console.log(name, value);
  };

  // Manejandor de envío de formulario
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario enviado");
  };
  return (
    <div>
      <h1>New Attendant</h1>
      {/* Enlazar eventos */}
      <form onSubmit={handleFormSubmit}>
        <div className="mb-2">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstname"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Save
        </button>
      </form>
    </div>
  );
};
