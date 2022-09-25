import { useMemo, useState } from "react";

export const useSearchBadges = (badges) => {
  const [query, setQuery] = useState("");

  const handleInputChange = ({ target }) => {
    setQuery(target.value.trim().toLowerCase());
  };

  // Filtrar los badges por el query de busqueda, memorizar el resultado, en caso de que la lista o el query cambien. se vuelve a filtrar los nuevos resultados. Esto ayuda a mejorar el rendimiento de la aplicación para filtrado de listas enormes.
  const badgesFiltered = useMemo(
    () =>
      badges.filter(
        (badge) =>
          badge.firstName.toLowerCase().includes(query) ||
          badge.lastName.toLowerCase().includes(query)
      ),
    [badges, query]
  );

  return {
    handleInputChange,
    badgesFiltered,
    query,
  };
};
