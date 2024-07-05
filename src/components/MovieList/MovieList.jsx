import "./MovieList.css";
import { movies } from "../../data/movies";
import { useNavigate } from "react-router-dom";

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
