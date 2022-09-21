import React from "react";
import { Link } from "react-router-dom";

export const NotBadges = () => {
  return (
    <div className="container">
      <h3>Upss!</h3>
      <p>Lo sentimos, no encontramos registros por el momento.</p>
      <Link to="/badges/new" className="btn btn-primary">
        Registra tu primer badge
      </Link>
    </div>
  );
};
