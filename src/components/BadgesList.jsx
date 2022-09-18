import React from "react";
import { BadgeItem } from "./BadgeItem";

// La responsabilidad de este componente es mostrar un listado de badges
export const BadgesList = ({ badges }) => {
  return (
    <ul className="list-unstyled">
      {badges.map((badge) => (
        <BadgeItem key={badge.id} badge={badge} />
      ))}
    </ul>
  );
};
