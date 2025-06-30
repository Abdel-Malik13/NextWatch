import { Link } from "react-router-dom";
import { FavoriteBtn } from "../FavoriteBtn/FavoriteBtn";
import styles from "./style.module.css";

export function Serie({ filteredSeries, favorites, toggleFavorite }) {
  return (
    <div className="row">
      {filteredSeries.map((serie) => {
        const isFavorite = favorites.some((s) => s.id === serie.id);
        return (
          <div key={serie.id} className="col-3" style={{ marginBottom: 30 }}>
            <div className={`card ${styles.customCard}`}>
              <Link
                to={`/series/${serie.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  className="card-img-top"
                  src={`https://image.tmdb.org/t/p/original/${serie.poster_path}`}
                  alt={serie.title}
                />
              </Link>
              <div className={`card-body ${styles.customCardBody}`}>
                <h5 className={`card-title ${styles.cardTitle}`}>
                  {serie.title || serie.name}
                </h5>
                {/* <p className="card-text">Résumé : {movie.overview}</p> */}
                <FavoriteBtn
                  toggleFavorite={toggleFavorite}
                  movie={serie}
                  isFavorite={isFavorite}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
