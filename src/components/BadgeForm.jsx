import React from "react";
import { useState } from "react";

// Inicializar el estado del formulario con un objeto vacio que representa la estructura de la información almacenada
const initialFormState = {
  firstname: "",
  lastname: "",
  email: "",
  jobtitle: "",
  twitter: "",
};

export const BadgeForm = () => {
  // Establecer el estado interno de este componente
  const [form, setForm] = useState(initialFormState);

  // Manejador de inputs controlados
  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    // Establecer el nuevo estado del formulario, conservando la data actual y actualizando solo aquello que sea necesario
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Manejandor de envío de formulario
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario enviado");
    console.log(form);
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
            value={form.firstname}
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
            value={form.lastname}
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
            value={form.email}
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
            value={form.jobtitle}
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
            value={form.twitter}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Save
        </button>
      </form>
    </div>
  );
};
