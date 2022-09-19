import "./styles/Navbar.css";
import logoConf from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="container-fluid">
        <Link to="/" className="Navbar__brand">
          <img src={logoConf} alt="Logotipo" className="Navbar__brand-logo" />
          <span className="fw-light">Platzi</span>
          <span className="fw-bold">Conf</span>
        </Link>
      </div>
    </div>
  );
};
