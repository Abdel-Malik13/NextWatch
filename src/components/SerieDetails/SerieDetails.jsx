import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./style.module.css";
import { Backdrop } from "../Backdrop/Backdrop";
import { MovieInformations } from "../MovieInformations/MovieInformations";
import { Recommendations } from "../Recommendations/Recommendations";
import { SerieInformations } from "../SerieInformations/SerieInformations";

export function SerieDetails() {
  const { idSerie } = useParams();
  const [serie, setSerie] = useState([]);
  const [actors, setActors] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${idSerie}?api_key=ccae82cf7c347e9bcf76e7fb9d9e51b1&language=fr-FR`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSerie(data);
      });
  }, [idSerie]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${idSerie}/credits?api_key=ccae82cf7c347e9bcf76e7fb9d9e51b1&language=fr-FR`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setActors(data.cast);
      });
  }, [idSerie]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${idSerie}/recommendations?api_key=ccae82cf7c347e9bcf76e7fb9d9e51b1&language=fr-FR`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRecommendations(data.results);
      });
  }, [idSerie]);

  return (
    <>
      <Backdrop backD={serie} />
      <SerieInformations serie={serie} styles={styles} actors={actors} />
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
            genre="series"
            styles={styles}
          />
        </div>
      </div>
    </>
  );
}
