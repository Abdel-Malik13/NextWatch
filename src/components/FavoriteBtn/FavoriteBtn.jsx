import styles from "./style.module.css";

export function FavoriteBtn({ toggleFavorite, data, isFavorite }) {
  return (
    <button
      className={isFavorite ? "btn btn-danger" : `btn ${styles.btnFavorite}`}
      onClick={() => {
        toggleFavorite(data);
      }}
    >
      {isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
    </button>
  );
}
