import React from "react";
import { Gravatar } from "./Gravatar";
import "./styles/BadgeItem.css";

// La responsabilidad de este componente es mostrar la información de un Badge
export const BadgeItem = ({ badge }) => {
  return (
    <li className="BadgeItem">
      <figure className="BadgeItem__container">
        <Gravatar email={badge.email} className="BadgeItem__image" />
        <figcaption>
          <p className="BadgeItem__name">
            {badge.firstName} {badge.lastName}
          </p>
          <p className="BadgeItem__twitter">@{badge.twitter}</p>
          <p className="BadgeItem__job">{badge.jobTitle}</p>
        </figcaption>
      </figure>
    </li>
  );
};
