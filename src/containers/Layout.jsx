import React from "react";
import { Navbar } from "../components/Navbar";

// Contenedor que define los elementos o estructura que se repite en todos sus elementos hijos
export const Layout = ({ children }) => {
  return (
    // Fragmento para encapsular contenido sin necesidad de declarar tags html contenedores innecesarios
    <>
      <Navbar />
      {children}
    </>
  );
};
