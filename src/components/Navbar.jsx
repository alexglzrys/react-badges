import "./styles/Navbar.css";
import logoConf from "../assets/images/logo.svg";

export const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="container-fluid">
        <a href="/" className="Navbar__brand">
          <img src={logoConf} alt="Logotipo" className="Navbar__brand-logo" />
          <span className="fw-light">Platzi</span>
          <span className="fw-bold">Conf</span>
        </a>
      </div>
    </div>
  );
};
