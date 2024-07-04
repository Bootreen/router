import "./Movies.css";
import { selectedMovie } from "../../utils/db-utils";
import MovieList from "../../components/MovieList/MovieList";
import MoviePreview from "../../components/MoviePreview/MoviePreview";
import { useState } from "react";

const Movies = () => {
  const [currentMovieId, setCurrentMovieId] = useState(0);
  const selectMovieHandler = (id) => setCurrentMovieId(id);
  const { movieCover, actorList } = selectedMovie(currentMovieId);

  return (
    <div className='movie-page-container'>
      <MovieList onSelectMovie={selectMovieHandler} />
      {selectedMovie(currentMovieId) && (
        <MoviePreview movieCover={movieCover} actorList={actorList} />
      )}
    </div>
  );
};

export default Movies;
