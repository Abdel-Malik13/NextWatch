import { useContext, useState } from "react";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { DataContext } from "../DataContext/DataContext";
import { FavoritesContext } from "../components/FavoritesContext/FavoritesContext";
import { Serie } from "../components/Serie/Serie";

export function Series() {
  const { series } = useContext(DataContext);

  const [filter, setFilter] = useState("");
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  console.log(series);

  const filteredSeries = series.filter((serie) =>
    (serie.title || serie.name || "")
      .toLowerCase()
      .includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <SearchBar
            filter={filter}
            setFilter={setFilter}
            placeholder="Chercher une série..."
          />
        </div>
      </div>
      <Serie
        filteredSeries={filteredSeries}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}
