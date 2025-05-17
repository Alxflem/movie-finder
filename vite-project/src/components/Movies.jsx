import Movie from "./Movie";
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

function Movies() {
  const { movies } = useContext(MovieContext);
  return (
    <div className="mt-10 w-full">
      <h2 className="text-3xl">Inlagda filmer</h2>
      <ul id="movie-list" className="space-y-1">
        {movies.map((movie, index) => (
          <Movie key={index} title={movie.title} grade={movie.rating} />
        ))}
      </ul>
    </div>
  );
}

export default Movies;
