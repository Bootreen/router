import { useNavigate } from "react-router-dom";
import { movies } from "../../data/movies";
import "./MovieList.css";

// const MovieList = ({ onSelectMovie }) => (
const MovieList = () => {
  const navigate = useNavigate();
  return (
    <table className='movie-list'>
      <tbody>
        {movies.map(({ id, title, tagline, thumbnail }) => (
          <tr key={id} onClick={() => navigate(`/movies/${id}`)}>
            <td>
              <img src={thumbnail} />
            </td>
            <td className='movie-title'>
              <strong>{title}</strong>
            </td>
            <td>{tagline}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieList;
