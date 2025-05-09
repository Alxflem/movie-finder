function MovieApplication({ children }) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col w-3/4 md:w-2/3 lg:w-1/2 bg-zinc-100 p-10 mt-10 gap-4 shadow-md">
        <h1 className="text-4xl font-bold">Min Filmlista</h1>
        {children}
      </div>
    </div>
  );
}

export default MovieApplication;
