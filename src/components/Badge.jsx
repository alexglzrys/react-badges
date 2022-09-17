// Importar un archivo CSS con las clases para decorar este componente
import "../styles/Badge.css";
// Importar una imagen
import confLogo from "../assets/images/badge-header.svg";

export const Badge = () => {
  return (
    <div className="Badge">
      <div className="Badge__header">
        <img src={confLogo} alt="Logotipo de la conferencia" />
      </div>
      <div className="Badge__section-name">
        <img
          src="https://s.gravatar.com/avatar/3ec49fc2d25e53433fc6a2f8090e705a?s=256
"
          alt="Avatar"
          className="Badge__avatar"
        />
        <h1>
          Alejandro <br />
          González
        </h1>
      </div>
      <div className="Badge__section-info">
        <h3>Ingeniero Frontend</h3>
        <span>@alexglzrys</span>
      </div>
      <div className="Badge__footer">#paltziconf</div>
    </div>
  );
};
