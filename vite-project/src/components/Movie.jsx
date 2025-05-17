import starIcon from "../assets/images/star.png";
import deleteIcon from "../assets/images/delete.png";
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

function Movie({ title, grade }) {
  const { movies, setMovies } = useContext(MovieContext);

  function deleteMovie(event) {
    const li = event.target.closest("li");
    const updatedMovies = movies.filter(
      (movie) =>
        !(movie.title === li.dataset.title && movie.rating === li.dataset.grade)
    );

    setMovies(updatedMovies);
  }

  return (
    <li
      data-title={title}
      data-grade={grade}
      className="flex flex-row w-full bg-gray-300 items-center h-full justify-between px-4 py-2 rounded-lg"
    >
      {title}
      <div className="flex flex-row  items-center">
        {Array.from({ length: parseInt(grade) }).map((_, index) => (
          <img key={index} src={starIcon} alt="" className="h-6" />
        ))}
        <img
          id="delete-movie"
          src={deleteIcon}
          alt=""
          className="h-8 hover:cursor-pointer"
          onClick={deleteMovie}
        />
      </div>
    </li>
  );
}

export default Movie;
