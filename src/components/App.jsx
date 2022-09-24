import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../containers/Layout";
import { BadgeEdit } from "../pages/BadgeEdit";
import { BadgeNew } from "../pages/BadgeNew";
import { Badges } from "../pages/Badges";
import { NotFound } from "../pages/NotFound";

// Componente funcional que define el listado de rutas de la aplicación principal
export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Badges />} />
          <Route path="/badges/new" element={<BadgeNew />} />
          <Route path="/badges/:editId/edit" element={<BadgeEdit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
