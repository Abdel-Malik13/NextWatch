import { Actors } from "../Actors/Actors";

export function MovieInformations({ movie, styles, actors }) {
  return (
    <div className="container" style={{ marginTop: 30, paddingLeft: 0 }}>
      <div className="row">
        <div className="col-2">
          <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />
        </div>
        <div className="col">
          <h1 className={`${styles.movieTitle}`}>{movie.title}</h1>
          <p className={`${styles.movieNote}`}>
            <i className="fas fa-star"></i>
            {Math.round(movie.vote_average * 10) / 10}/10 ({movie.vote_count})
          </p>
          <p className={`${styles.movieStatus}`}>Statut : {movie.status}</p>
          <p className={`${styles.movieStatus}`}>
            Genre : {movie.genres?.map((genre) => genre.name).join(", ")}
          </p>
          <h2 className={`${styles.movieSubtitles}`}>Description : </h2>
          <p className={`${styles.movieOverview}`}>{movie.overview}</p>
          <h2 className={`${styles.movieSubtitles}`} style={{ marginTop: 40 }}>
            Acteurs :
          </h2>
          <Actors actors={actors} />
        </div>
      </div>
    </div>
  );
}
