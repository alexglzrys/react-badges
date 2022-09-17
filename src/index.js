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
    <Badge
      firstName="Alejandro"
      lastName="González"
      avatar="https://s.gravatar.com/avatar/3ec49fc2d25e53433fc6a2f8090e705a?s=256"
      jobTitle="Ingeniero Frontend en Figment"
      twitter="alexglzrys"
    />
  </React.StrictMode>
);
