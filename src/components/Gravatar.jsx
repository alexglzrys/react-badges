import md5 from "md5";
import React from "react";

export const Gravatar = ({ email, className }) => {
  const hash = md5(email.trim().toLowerCase());
  const imageUrl = `https://s.gravatar.com/avatar/${hash}?s=80&d=identicon`;
  return <img src={imageUrl} alt="Avatar" className={className} />;
};
