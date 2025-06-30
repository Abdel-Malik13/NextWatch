import { Link } from "react-router-dom";
import { FavoriteBtn } from "../FavoriteBtn/FavoriteBtn";
import styles from "./style.module.css";

export function Movies({ filteredMovies, favorites, toggleFavorite }) {
  return (
    <div className="row">
      {filteredMovies.map((movie) => {
        const isFavorite = favorites.some((f) => f.id === movie.id);
        return (
          <div key={movie.id} className="col-3" style={{ marginBottom: 30 }}>
            <div className={`card ${styles.customCard}`}>
              <Link
                to={`/films/${movie.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  className="card-img-top"
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              <div className={`card-body ${styles.customCardBody}`}>
                <h5 className={`card-title ${styles.cardTitle}`}>
                  {movie.title}
                </h5>
                {/* <p className="card-text">Résumé : {movie.overview}</p> */}
                <FavoriteBtn
                  toggleFavorite={toggleFavorite}
                  data={movie}
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
