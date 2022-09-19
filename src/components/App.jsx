import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BadgeNew } from "../pages/BadgeNew";
import { Badges } from "../pages/Badges";

// Componente funcional que define el listado de rutas de la aplicación principal
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Badges />} />
        <Route path="/badges/new" element={<BadgeNew />} />
      </Routes>
    </BrowserRouter>
  );
};
