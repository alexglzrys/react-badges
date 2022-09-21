import React, { useEffect, useState } from "react";
import { BadgesList } from "../components/BadgesList";
import { Link } from "react-router-dom";
import { Loader } from "../components/Loader";
import { NotBadges } from "../components/NotBadges";
import { Error } from "../components/Error";
import api from "../api";
import Logo from "../assets/images/platziconf-logo.svg";
import "./styles/Badges.css";

export const Badges = () => {
  // Establecer estado - referente al listado de badges
  const [badges, setBadges] = useState(undefined);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Hacer un llamado a la Fake API
    const fetchData = async () => {
      try {
        setLoader(true);
        const data = await api.badges.list();
        // Actualizar el estado con base a la respuesta de la API
        setBadges(data);
        setLoader(false);
        setError(null);
      } catch (error) {
        setBadges(undefined);
        setLoader(false);
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const getInfoUI = (
    <>
      <div className="Badges__container">
        <div className="Badges__buttons">
          {/* Componente para navegar entre rutas de la aplicación */}
          <Link to="/badges/new" className="btn btn-primary">
            New Badge
          </Link>
        </div>
      </div>
      <div className="Badges__list">
        <div className="Badges__container">
          {/* Container que muestra el listado de badges registrados */}
          <BadgesList badges={badges} />
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="Badges">
        <div className="Badges__hero">
          <div className="Badges__container">
            <img src={Logo} alt="Logo Hero" className="Badges_conf-logo" />
          </div>
        </div>
      </div>
      {loader ? (
        <Loader />
      ) : (
        <>
          {error ? (
            <Error message={error.message} />
          ) : (
            <> {badges.length === 0 ? <NotBadges /> : getInfoUI}</>
          )}
        </>
      )}
    </>
  );
};
