import "./MoviePreview.css";
import { useParams } from "react-router-dom";
import { retriveSelectedMovieData } from "../../utils/db-utils";

const MoviePreview = () => {
  const { movieId } = useParams();
  const { movieCover, actorList } = retriveSelectedMovieData(movieId);
  return (
    <div className='movie-preview'>
      <div className='movie-cover'>
        <img src={movieCover} />
      </div>
      <h3>Top cast:</h3>
      <ul className='actor-list'>
        {actorList.map(({ id, actor, role, image }) => (
          <li className='actor' key={id}>
            <img src={image} />
            <p>
              <strong>{actor}</strong> as {role}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviePreview;
