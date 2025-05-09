import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

function OrderByAlhpaButton() {
  const { movies, setMovies } = useContext(MovieContext);

  function handleOrderByAlpha() {
    const orderedMovies = [...movies].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setMovies(orderedMovies);
  }

  return (
    <button
      className="bg-blue-500 text-white p-2 w-fit rounded inline-flex hover:cursor-pointer"
      onClick={handleOrderByAlpha}
    >
      Alfabetisk ordning
    </button>
  );
}

export default OrderByAlhpaButton;
