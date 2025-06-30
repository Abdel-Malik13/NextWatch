export function Backdrop({ backD }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col" style={{ paddingLeft: 0 }}>
          <img
            src={`https://image.tmdb.org/t/p/original/${backD.backdrop_path}`}
            style={{ width: "100vw", height: "50vh", objectFit: "cover" }}
            alt="Backdrop"
          />
        </div>
      </div>
    </div>
  );
}
