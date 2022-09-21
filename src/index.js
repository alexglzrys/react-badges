import React from "react";
// Requerir bootstrap CSS en el proyecto
import "bootstrap/dist/css/bootstrap.css";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
// Requerir archivos globales de CSS
import "./global.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
