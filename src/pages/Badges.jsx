import React, { useEffect, useMemo, useState } from "react";
import { BadgesList } from "../components/BadgesList";
import { Link } from "react-router-dom";
import { Loader } from "../components/Loader";
import { NotBadges } from "../components/NotBadges";
import { Error } from "../components/Error";
import api from "../api";
import Logo from "../assets/images/platziconf-logo.svg";
import "./styles/Badges.css";
import { useSearchBadges } from "../hooks/useSearchBadges";

export const Badges = () => {
  // Establecer estado - referente al listado de badges
  const [badges, setBadges] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);

  // Importar custom hook para fitrar o buscar badges
  // El valor inicial es todo el listado de badges (fuente de datos original a partir de la cual se comenzará a filtrar)
  const { query, handleInputChange, badgesFiltered } = useSearchBadges(badges);

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
        setBadges([]);
        setLoader(false);
        setError(error.message);
      }
    };
    fetchData();
  }, []);

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
            <>
              {" "}
              {badges.length === 0 ? (
                <NotBadges />
              ) : (
                <>
                  <div className="Badges__container">
                    <div className="Badges__buttons">
                      {/* Componente para navegar entre rutas de la aplicación */}
                      <Link to="/badges/new" className="btn btn-primary">
                        New Badge
                      </Link>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="filterBadge">Filtrar badges</label>
                      <input
                        type="text"
                        name="filterBadge"
                        placeholder="Ingrese un nombre"
                        className="form-control"
                        value={query}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="Badges__list">
                    <div className="Badges__container">
                      {/* Container que muestra el listado de badges filtrados por la caja de busqueda */}
                      <BadgesList badges={badgesFiltered} />
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};
