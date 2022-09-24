import { Badge } from "../components/Badge";
import { BadgeForm } from "../components/BadgeForm";

import "./styles/BadgeNew.css";
import Logotipo from "../assets/images/platziconf-logo.svg";
import { useEffect, useState } from "react";
import api from "../api";
import { Loader } from "../components/Loader";
import { useNavigate, useParams } from "react-router-dom";

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

export const BadgeEdit = () => {
  // Establecer el estado interno de este componente
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Custom hooks para navegación y recuperación de parámetros de ruta
  const navigate = useNavigate();
  const { editId } = useParams();

  // Efecto secundario para recuperar la información del BADGE POR SU ID
  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchData = async () => {
      try {
        const data = await api.badges.read(editId);
        setState((state) => ({
          ...state,
          form: data,
        }));
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    };
    fetchData();
  }, [editId]);

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

  // Función encargada de editar un Badge por su id (pasado como parametro en la ruta)
  const editBadge = async () => {
    //console.log(state.form);
    setLoading(true);
    setError(null);
    try {
      await api.badges.update(editId, state.form);
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
            <h1>Edit Attendant</h1>
            {/* Enviar como props, el estado incial del formulario, la función que controla los inputs del formulario, y la función para solicitar el registro de un nuevo Badge */}

            {/* En caso de un error, el componente BadgeForm es encargado de mostrarlo en pantalla */}
            <BadgeForm
              formValues={state.form}
              handleInputChange={handleInputChange}
              createNewBadge={editBadge}
              error={error}
            />
          </div>
        </div>
      </div>
    </>
  );
};
