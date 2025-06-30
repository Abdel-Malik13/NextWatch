import { Link } from "react-router-dom";

export function Recommendations({ recommendations, genre, styles }) {
  return (
    <div
      class="card-group"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "stretch",
      }}
    >
      {recommendations.slice(0, 5).map((recommendation) => (
        <div className="col-2 " style={{ display: "flex" }}>
          <div
            className={`card  ${styles.customCard}`}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w185/${recommendation.poster_path}`}
              className="card-img-top"
              alt="..."
              style={{ objectFit: "cover", height: "300px" }}
            />
            <div
              className={`card-body ${styles.customCardBody}`}
              style={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <h5 className={`card-title ${styles.cardTitle}`}>
                {recommendation.title || recommendation.name}
              </h5>
              <Link
                to={`/${genre}/${recommendation.id}`}
                className="btn btn-primary"
              >
                Regarder
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
