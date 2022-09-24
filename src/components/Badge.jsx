// Importar un archivo CSS con las clases para decorar este componente
import "./styles/Badge.css";
// Importar una imagen
import confLogo from "../assets/images/badge-header.svg";
import { Gravatar } from "./Gravatar";

// Recibir props en el componente
export const Badge = ({ firstName, lastName, jobTitle, twitter, email }) => {
  return (
    <div className="Badge">
      <div className="Badge__header">
        <img src={confLogo} alt="Logotipo de la conferencia" />
      </div>
      <div className="Badge__section-name">
        <Gravatar email={email} className="Badge__avatar" />
        <h1>
          {firstName} <br />
          {lastName}
        </h1>
      </div>
      <div className="Badge__section-info">
        <h3>{jobTitle}</h3>
        <span>@{twitter}</span>
      </div>
      <div className="Badge__footer">#paltziconf</div>
    </div>
  );
};
