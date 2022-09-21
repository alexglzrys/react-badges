import React from "react";

export const Error = ({ message }) => {
  return (
    <div className="container">
      <h3>Upss!</h3>
      <p>Algo salió mal y hemos mostrado este mensaje amistoso de error</p>
      <pre>{message}</pre>
    </div>
  );
};
