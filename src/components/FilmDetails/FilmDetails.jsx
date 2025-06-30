import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./style.module.css";
import { Backdrop } from "../Backdrop/Backdrop";
import { MovieInformations } from "../MovieInformations/MovieInformations";
import { Recommendations } from "../Recommendations/Recommendations";

export function FilmDetails() {
  const { idFilm } = useParams();
  const [movie, setMovie] = useState([]);
  const [actors, setActors] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${idFilm}?api_key=ccae82cf7c347e9bcf76e7fb9d9e51b1&language=fr-FR`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovie(data);
      });
  }, [idFilm]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${idFilm}/credits?api_key=ccae82cf7c347e9bcf76e7fb9d9e51b1&language=fr-FR`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setActors(data.cast);
      });
  }, [idFilm]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${idFilm}/recommendations?api_key=ccae82cf7c347e9bcf76e7fb9d9e51b1&language=fr-FR`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        setRecommendations(data.results);
      });
  }, [idFilm]);

  return (
    <>
      <Backdrop backD={movie} />
      <MovieInformations movie={movie} styles={styles} actors={actors} />
      <div className="container">
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 50,
            marginBottom: 50,
          }}
        >
          <h2 style={{ color: "#fff" }}>Recommandations</h2>
          <Recommendations
            recommendations={recommendations}
            genre="films"
            styles={styles}
          />
        </div>
      </div>
    </>
  );
}
