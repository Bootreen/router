import "./Movies.css";
import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { Outlet } from "react-router-dom";

const Movies = () => {
  const [, setCurrentMovieId] = useState(0);
  const selectMovieHandler = (id) => setCurrentMovieId(id);

  return (
    <div className='movie-page-container'>
      <MovieList onSelectMovie={selectMovieHandler} />
      <Outlet />
    </div>
  );
};

export default Movies;
