import { Actors } from "../Actors/Actors";

export function SerieInformations({ serie, styles, actors }) {
  return (
    <div className="container" style={{ marginTop: 30, paddingLeft: 0 }}>
      <div className="row">
        <div className="col-2">
          <img src={`https://image.tmdb.org/t/p/w185/${serie.poster_path}`} />
        </div>
        <div className="col">
          <h1 className={`${styles.serieTitle}`}>{serie.title}</h1>
          <p className={`${styles.serieNote}`}>
            <i className="fas fa-star"></i>
            {Math.round(serie.vote_average * 10) / 10}/10 ({serie.vote_count})
          </p>
          <p className={`${styles.serieStatus}`}>Statut : {serie.status}</p>
          <p className={`${styles.serieStatus}`}>
            Genre : {serie.genres?.map((genre) => genre.name).join(", ")}
          </p>
          <h2 className={`${styles.serieSubtitles}`}>Description : </h2>
          <p className={`${styles.serieOverview}`}>{serie.overview}</p>
          <h2 className={`${styles.serieSubtitles}`} style={{ marginTop: 40 }}>
            Acteurs :
          </h2>
          <Actors actors={actors} />
        </div>
      </div>
    </div>
  );
}
