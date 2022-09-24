import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api";
import "./styles/BadgeDetails.css";
import logoConf from "../assets/images/platziconf-logo.svg";
import { Loader } from "../components/Loader";
import { BadgeError } from "../components/BadgeError";
import { Badge } from "../components/Badge";

export const BadgeDetails = () => {
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

  return (
    <>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <img src={logoConf} alt="Logo de la conferencia" />
            </div>
            <div className="col BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge {...badge} />
          </div>
          <div className="col BadgeDetails__actions">
            <h4 className="mb-4">Acciones</h4>
            <div className="BadgeDetails__controls">
              <Link
                to={`/badges/${badge.id}/edit`}
                className="btn btn-success mb-2"
              >
                Editar
              </Link>
              <button className="btn btn-danger">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
