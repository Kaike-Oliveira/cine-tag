// Core
import { createContext, useContext, useState } from "react";

// Create context
export const FavoritesContext = createContext();
FavoritesContext.displayName = "Favorites";

// Provider
export default function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoritesContext.Provider
      value={{ favorite, setFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

// useContext
export function useFavoriteContext() {
  const { favorite, setFavorite } = useContext(FavoritesContext);

  function addFavorite(newFavorite) {
    const repetedFavorite = favorite.some(item => item.id === newFavorite.id)

    let newList = [...favorite];

    if (!repetedFavorite) {
      newList.push(newFavorite);
      return setFavorite(newList)
    }

    newList.splice(newList.indexOf(newFavorite), 1);
    return setFavorite(newList);
  }

  return {favorite, addFavorite}
}