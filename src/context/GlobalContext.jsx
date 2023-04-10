import { createContext, useReducer } from "react";

const getFavsFromStorage = () => {
  const localData = localStorage.getItem("favs");
  return localData ? JSON.parse(localData) : [];
};

const saveFavsToStorage = (favs) => {
  localStorage.setItem("favs", JSON.stringify(favs));
};

const initialState = {
  favs: getFavsFromStorage(),
  theme: "light",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add_fav":
      const newFav = [...state.favs, action.payload];
      saveFavsToStorage(newFav);
      return { ...state, favs: newFav };

    case "remove_fav":
      const filteredFavs = state.favs.filter(
        (fav) => fav.id !== action.payload
      );
      saveFavsToStorage(filteredFavs);
      return { ...state, favs: filteredFavs };

    case "toggle_theme":
      const newTheme = state.theme === "light" ? "dark" : "light";
      return { ...state, theme: newTheme };

    default:
      return state;
  }
};

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
