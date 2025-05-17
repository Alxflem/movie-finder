import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";

function AddMovieForm() {
  const [title, setTitle] = useState(""); // useState för att hålla koll på titeln
  const [rating, setRating] = useState("0"); // useState för att hålla koll på betyget
  const { movies, setMovies } = useContext(MovieContext);

  function HandleSubmit(event) {
    event.preventDefault();

    // Validera att titeln och betyget är ifyllda
    if (title === "") {
      window.alert("Fyll i titel");
      return;
    } else if (rating === "0") {
      window.alert("Välj betyg");
      return;
    }

    // Skapa ett nytt filmobjekt och lägg till det i listan
    setMovies([
      ...movies,
      {
        title: title,
        rating: rating,
      },
    ]);

    // Återställ formuläret och states
    setRating("");
    setTitle("");
    event.target.reset();
  }

  return (
    <form id="add-movie-form" className="w-full" onSubmit={HandleSubmit}>
      <fieldset className="flex flex-col gap-2">
        <legend className="mb-10 border-b">Lägg till film</legend>
        <label>Titel</label>
        <input
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          type="text"
          id="title-field"
          className="form-input bg-gray-200 p-1 rounded-lg"
          placeholder="Titel här..."
          // required
        />
        <label>Betyg:</label>
        <select
          type="text"
          id="rating-field"
          className="form-input"
          onChange={(event) => {
            setRating(event.target.value);
          }}
        >
          <option value="0">Välj betyg här...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <input
          type="submit"
          className="bg-green-500 rounded text-white hover:cursor-pointer w-fit p-2 mt-4"
          value="Spara film"
        />
      </fieldset>
    </form>
  );
}

export default AddMovieForm;
