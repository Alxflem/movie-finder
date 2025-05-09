import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

function OrderByGradeButton() {
  const { movies, setMovies } = useContext(MovieContext);

  // function testContext() {
  //   setMovies([
  //     ...movies,
  //     {
  //       title: "TESTING",
  //       grade: 5,
  //     },
  //   ]);
  // }

  function handleOrderByGrade() {
    const orderedMovies = [...movies].sort((a, b) => b.rating - a.rating);
    setMovies(orderedMovies);
  }

  // function logMovies() {
  //   console.log(movies);
  // }

  return (
    <button
      className="bg-blue-500 text-white p-2 w-fit rounded-md hover:cursor-pointer"
      onClick={handleOrderByGrade}
    >
      Betygsordning
    </button>
  );
}

export default OrderByGradeButton;
