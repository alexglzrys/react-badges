import React from "react";
import { Link } from "react-router-dom";
import { BadgeItem } from "./BadgeItem";

// La responsabilidad de este componente es mostrar un listado de badges
export const BadgesList = ({ badges }) => {
  return (
    <ul className="list-unstyled">
      {badges.map((badge) => (
        <Link
          to={`/badges/${badge.id}`}
          key={badge.id}
          className="text-reset text-decoration-none d-block mb-3"
        >
          <BadgeItem badge={badge} />
        </Link>
      ))}
    </ul>
  );
};
