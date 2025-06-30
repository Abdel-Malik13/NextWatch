import styles from "./style.module.css";

export function Favorite({ favorites }) {
  return (
    <div className="container" style={{ marginTop: 30 }}>
      {favorites.length === 0 ? (
        <p className={`${styles.noFavorites}`}>
          Pour le moment il n'y a aucun film en favoris
        </p>
      ) : (
        <div className="row">
          {favorites.map((fav) => {
            return (
              <div key={fav.id} className="col-2">
                <img
                  src={`https://image.tmdb.org/t/p/w185/${fav.poster_path}`}
                  alt={fav.title}
                />
                <div className="card-body">
                  <h5 className={`card-title ${styles.cardTitle}`}>
                    {fav.title}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
