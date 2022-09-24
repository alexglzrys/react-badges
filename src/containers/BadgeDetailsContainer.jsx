import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import { Loader } from "../components/Loader";
import { BadgeError } from "../components/BadgeError";
import { BadgeDetails } from "../pages/BadgeDetails";

// ? Este es un componente Container - Encargado de la lógica
// * Solo debe declarar el estado, las funciones y lógica necesaria para cumplir su tarea, y debe retornar los componentes presentacionales a mostrar en la UI
// ! De esta forma queda divido el código por responsabilidades únicas.

export const BadgeDetailsContainer = () => {
  // Estado inicial del componente de detalle
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [badge, setBadge] = useState(undefined);

  const params = useParams();

  // Efecto secundario para localizar la información de un badge con base en su id
  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchData = async () => {
      try {
        const data = await api.badges.read(params.badgeId);
        setLoading(false);
        setBadge(data);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    };
    fetchData();
  }, [params.badgeId]);

  // Mostrar componentes de carga y error
  if (loading) return <Loader />;
  if (error) return <BadgeError error={error} />;

  // Si la data existe, renderizamos el componente encargado de mostrar la UI (COMPONENTE PRESENTACIONAL BadgeDetails)
  return <BadgeDetails badge={badge} />;
};
