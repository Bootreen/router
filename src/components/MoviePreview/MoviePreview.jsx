import "./MoviePreview.css";

const MoviePreview = ({ movieCover, actorList }) => (
  <div className='movie-preview'>
    <img src={movieCover} />
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

export default MoviePreview;
