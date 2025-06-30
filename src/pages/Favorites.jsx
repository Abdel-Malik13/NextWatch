import { useContext } from "react";
import { FavoritesContext } from "../components/FavoritesContext/FavoritesContext";
import { Favorite } from "../components/Favorite/Favorite";

export function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return <Favorite favorites={favorites} />;
}
