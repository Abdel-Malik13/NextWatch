import { useContext, useEffect, useState } from "react";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { Movies } from "../components/Movies/Movies";
import { DataContext } from "../DataContext/DataContext";
import { FavoritesContext } from "../components/FavoritesContext/FavoritesContext";

export function Home() {
  const { movies } = useContext(DataContext);
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const [filter, setFilter] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <SearchBar
        filter={filter}
        setFilter={setFilter}
        placeholder="Chercher un film..."
      />
      <Movies
        filteredMovies={filteredMovies}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}
