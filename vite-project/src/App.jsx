import MovieApplication from "./components/MovieApplication";
import AddMovieForm from "./components/AddMovieForm";
import Movies from "./components/Movies";
import OrderByAlhpaButton from "./components/OrderByAlphaButton";
import OrderByGradeButton from "./components/OrderByGradeButton";
import ButtonContainer from "./components/ButtonContainer";

import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieApplication>
      <MovieProvider>
        <AddMovieForm />
        <Movies />
        <ButtonContainer>
          <OrderByAlhpaButton />
          <OrderByGradeButton />
        </ButtonContainer>
      </MovieProvider>
    </MovieApplication>
  );
}

export default App;
