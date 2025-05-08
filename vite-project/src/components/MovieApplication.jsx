function MovieApplication({ children }) {
  return (
    <div className="flex flex-col items-center">
      <h1>Min Filmlista</h1>
      {children}
    </div>
  );
}

export default MovieApplication;
