import { movies } from "../../data/movies";
import "./MovieList.css";

const MovieList = ({ onSelectMovie }) => (
  <table className='movie-list'>
    <tbody>
      {movies.map(({ id, title, tagline, thumbnail }) => (
        <tr key={id} onClick={() => onSelectMovie(id)}>
          <td>
            <img src={thumbnail} />
          </td>
          <td>
            <strong>{title}</strong>
          </td>
          <td>{tagline}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default MovieList;
