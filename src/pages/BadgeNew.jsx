import { Badge } from "../components/Badge";
import { BadgeForm } from "../components/BadgeForm";

import "./styles/BadgeNew.css";
import Logotipo from "../assets/images/platziconf-logo.svg";
import { useState } from "react";
import api from "../api";
import { Loader } from "../components/Loader";
import { useNavigate } from "react-router-dom";

// Inicializar el estado del formulario con un objeto vacio que representa la estructura de la información almacenada.
// Es importante inicializar el valor de cada campo para que pueda ser asociado o ligado con el estado (input controlado)
const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  jobTitle: "",
  twitter: "",
};

// Estado global del componente BadgeNew
const initialState = {
  form: initialFormState,
};

export const BadgeNew = () => {
  // Establecer el estado interno de este componente
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

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
  const createNewBadge = async () => {
    //console.log(state.form);
    setLoading(true);
    setError(null);
    try {
      await api.badges.create(state.form);
      setLoading(false);
      // Redireccionar al listado de badges
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  if (loading) return <Loader />;

  return (
    <>
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
              firstName={state.form.firstName || "FIRST_NAME"}
              lastName={state.form.lastName || "LAST_NAME"}
              jobTitle={state.form.jobTitle || "JOB_TITLE"}
              twitter={state.form.twitter || "twitter"}
              email={state.form.email}
            />
          </div>
          <div className="col">
            {/* Enviar como props, el estado incial del formulario, la función que controla los inputs del formulario, y la función para solicitar el registro de un nuevo Badge */}

            {/* En caso de un error, el componente BadgeForm es encargado de mostrarlo en pantalla */}
            <BadgeForm
              formValues={state.form}
              handleInputChange={handleInputChange}
              createNewBadge={createNewBadge}
              error={error}
            />
          </div>
        </div>
      </div>
    </>
  );
};
