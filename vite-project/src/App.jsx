import MovieApplication from "./components/MovieApplication";
import AddMovieForm from "./components/AddMovieForm";
import Movies from "./components/Movies";

function App() {
  return (
    <MovieApplication>
      <AddMovieForm />
      <Movies />
    </MovieApplication>
  );
}

export default App;
