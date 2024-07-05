import "./Movies.css";
import MovieList from "../../components/MovieList/MovieList";
import { Outlet } from "react-router-dom";

const Movies = () => (
  <div className='movie-page-container'>
    <MovieList />
    <Outlet />
  </div>
);

export default Movies;
