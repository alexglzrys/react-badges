import { Navbar } from "../components/Navbar";
import { Badge } from "../components/Badge";
import { BadgeForm } from "../components/BadgeForm";

import "./styles/BadgeNew.css";
import Logotipo from "../assets/images/platziconf-logo.svg";
import { useState } from "react";

// Inicializar el estado del formulario con un objeto vacio que representa la estructura de la información almacenada.
// Es importante inicializar el valor de cada campo para que pueda ser asociado o ligado con el estado (input controlado)
const initialFormState = {
  firstname: "",
  lastname: "",
  email: "",
  jobtitle: "",
  twitter: "",
};

// Estado global del componente BadgeNew
const initialState = {
  form: initialFormState,
};

export const BadgeNew = () => {
  // Establecer el estado interno de este componente
  const [state, setState] = useState(initialState);

  // Manejador de inputs controlados
  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    // Establecer el nuevo estado del formulario, conservando la data actual del estado globla del componente, y actualizando solo aquello que sea necesario
    setState({
      ...state,
      form: {
        ...state.form,
        [name]: value,
      },
    });
  };

  // Función encargada de registrar un nuevo Badge
  const createNewBadge = () => {
    console.log(state.form);
  };

  return (
    <div>
      <Navbar />
      <div className="BadgeNew__hero">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <img src={Logotipo} alt="Logotipo" className="img-fluid" />
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={state.form.firstname || ""}
              lastName={state.form.lastname || ""}
              avatar="https://s.gravatar.com/avatar/3ec49fc2d25e53433fc6a2f8090e705a?s=256"
              jobTitle={state.form.jobtitle}
              twitter={state.form.twitter}
            />
          </div>
          <div className="col">
            {/* Enviar como props, el estado incial del formulario, la función que controla los inputs del formulario, y la función para solicitar el registro de un nuevo Badge */}
            <BadgeForm
              formValues={state.form}
              handleInputChange={handleInputChange}
              createNewBadge={createNewBadge}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
