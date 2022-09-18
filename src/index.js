import React from "react";
// Requerir bootstrap CSS en el proyecto
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom/client";
// Requerir archivos globales de CSS
import "./global.css";
import "./index.css";
import { BadgeNew } from "./pages/BadgeNew";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BadgeNew />
  </React.StrictMode>
);
