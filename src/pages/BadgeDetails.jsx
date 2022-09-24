import { Link } from "react-router-dom";
import "./styles/BadgeDetails.css";
import logoConf from "../assets/images/platziconf-logo.svg";
import { Badge } from "../components/Badge";

// ? Este es un componente presentacional - Encargado de la UI
// * Por tanto solo debe incluir el JSX a renderizar a partir de los props proporcionados por su contenedor

export const BadgeDetails = ({ badge }) => {
  return (
    <>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <img src={logoConf} alt="Logo de la conferencia" />
            </div>
            <div className="col BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge {...badge} />
          </div>
          <div className="col BadgeDetails__actions">
            <h4 className="mb-4">Acciones</h4>
            <div className="BadgeDetails__controls">
              <Link
                to={`/badges/${badge.id}/edit`}
                className="btn btn-success mb-2"
              >
                Editar
              </Link>
              <button className="btn btn-danger">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
