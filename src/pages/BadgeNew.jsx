import { Navbar } from "../components/Navbar";
import { Badge } from "../components/Badge";

import "./styles/BadgeNew.css";
import Logotipo from "../assets/images/platziconf-logo.svg";

export const BadgeNew = () => {
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
              firstName="Alejandro"
              lastName="González"
              avatar="https://s.gravatar.com/avatar/3ec49fc2d25e53433fc6a2f8090e705a?s=256"
              jobTitle="Ingeniero Frontend en Figment"
              twitter="alexglzrys"
            />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};
