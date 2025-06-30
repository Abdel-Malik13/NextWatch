export function Actors({ actors }) {
  return (
    <ul
      style={{
        display: "flex",
        listStyle: "none",
        justifyContent: "space-between",
        marginTop: 40,
        paddingLeft: 0,
      }}
    >
      {actors.slice(0, 5).map((actor) => {
        return (
          <li
            key={actor.id}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              textAlign: "center",
              color: "#fff",
            }}
          >
            <img
              src={
                `https://image.tmdb.org/t/p/w185/${actor.profile_path}` ||
                "image"
              }
              alt={actor.name}
              style={{
                borderRadius: "50%",
                width: 100,
                height: 100,
                objectFit: "cover",
              }}
            />
            {actor.name}
          </li>
        );
      })}
    </ul>
  );
}
