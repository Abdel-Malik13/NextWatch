import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { NavBar } from "./components/NavBar/NavBar";
import { DataContext } from "./DataContext/DataContext";
import { FavoritesProvider } from "./components/FavoritesContext/FavoritesContext";
import { Series } from "./pages/Series";
import { FilmDetails } from "./components/FilmDetails/FilmDetails";
import { SerieDetails } from "./components/SerieDetails/SerieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=ccae82cf7c347e9bcf76e7fb9d9e51b1&language=fr-FR&page=1"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération de films", error);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=ccae82cf7c347e9bcf76e7fb9d9e51b1&language=fr-FR&page=1"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSeries(data.results);
      });
  }, []);

  return (
    <>
      <DataContext.Provider value={{ movies, series }}>
        <FavoritesProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/films/:idFilm" element={<FilmDetails />} />
            <Route path="/series" element={<Series />} />
            <Route path="/series/:idSerie" element={<SerieDetails />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </FavoritesProvider>
      </DataContext.Provider>
    </>
  );
}

export default App;
