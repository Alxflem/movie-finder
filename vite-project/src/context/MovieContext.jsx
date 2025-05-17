import { createContext, useState, useEffect } from "react";

/**
 * MovieContext är en React Context som används för att dela filmdata mellan komponenter.
 * Detta är själva kontextobjektet som kommer att användas för att tillhandahålla och konsumera filmdata.
 */
export const MovieContext = createContext();

/**
 * En komponent som tillhandahåller MovieContext för sina children.
 * Denna komponent används för att dela filmerna mellan olika komponenter i applikationen.
 */
export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
};
