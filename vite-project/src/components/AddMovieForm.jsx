const titlefield = documentById("title-field").value;
const ratingfield = documentById("rating-field").value;

function teest(event) {
  event.preventDefault();
  console.log("HELLO!");
}

function HandleSubmit(event) {
  event.preventDefault();
  if (titlefield === "") {
    window.alert("Fyll i alla fält");
    return;
  } else if (ratingfield === "0") {
    window.alert("Välj betyg");
    return;
  }
}

function AddMovieForm() {
  return (
    <form id="add-movie-form" className="shadow-xl p-4 bg-slate-50 rounded-2xl">
      <fieldset className="flex flex-col gap-2">
        <legend className="mb-10">Lägg till film</legend>
        <label>Titel</label>
        <input
          type="text"
          id="title-field"
          className="form-input"
          placeholder="Titel"
          required
        />
        <label>Betyg:</label>
        <select type="text" id="rating-field" className="form-input">
          <option value="0">Välj betyg här...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <input
          type="submit"
          className=""
          value="Spara film"
          onSubmit={HandleSubmit}
        />
      </fieldset>
    </form>
  );
}

export default AddMovieForm;
