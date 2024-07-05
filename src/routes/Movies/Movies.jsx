import "./Movies.css";
import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import MoviePreview from "../../components/MoviePreview/MoviePreview";
import { Outlet } from "react-router-dom";

const Movies = () => {
  const [currentMovieId, setCurrentMovieId] = useState(0);
  const selectMovieHandler = (id) => setCurrentMovieId(id);

  return (
    <div className='movie-page-container'>
      <MovieList onSelectMovie={selectMovieHandler} />
      {/* Don't render preview if no movie selected */}
      {currentMovieId > 0 && <MoviePreview />}
      <Outlet />
    </div>
  );
};

export default Movies;
