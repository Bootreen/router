import "./Movies.css";
import { movies } from "../../data/movies";
import { actors } from "../../data/actors";
import { useState } from "react";

const Movies = () => {
  const [currentMovieId, setCurrentMovieId] = useState(0);
  const onSelectMovie = (id) => setCurrentMovieId(id);

  const retrieveActorList = (cast) =>
    cast
      .map(({ id, character }) => ({
        ...actors.find(({ id: actorId }) => id === actorId),
        role: character,
      }))
      .map(({ id, name, image, role }) => ({
        id: id,
        actor: name,
        role: role,
        image: image,
      }));

  const parseSelectedMovie = () => {
    if (currentMovieId === 0) return false;
    else {
      const { image, cast } = movies.find(({ id }) => id === currentMovieId);
      const actorList = retrieveActorList(cast);
      return { movieCover: image, actorList: actorList };
    }
  };

  const { movieCover, actorList } = parseSelectedMovie();

  return (
    <div className='movie-page-container'>
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
      {parseSelectedMovie() && (
        <div className='movie-preview'>
          <img src={movieCover} />
          <h3>Top cast:</h3>
          <ul className='actor-list'>
            {actorList.map(({ id, actor, role, image }) => (
              <li className='actor' key={id}>
                <img src={image} />
                <p>
                  {actor} as {role}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Movies;
