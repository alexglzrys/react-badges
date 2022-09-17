import React from "react";
// Requerir bootstrap CSS en el proyecto
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom/client";
import { Badge } from "./components/Badge";
// Requerir archivos globales de CSS
import "./global.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Badge />
  </React.StrictMode>
);
