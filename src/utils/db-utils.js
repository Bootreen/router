import { movies } from "../data/movies";
import { actors } from "../data/actors";

const retrieveActorList = (cast) =>
  cast
    .map(({ id, character }) => ({
      ...actors.find(({ id: actorId }) => id == actorId),
      // get role from selected movie, not from the actor record
      role: character,
    }))
    .map(({ id, name, image, role }) => ({
      id: id,
      actor: name,
      role: role,
      image: image,
    }));

export const retriveSelectedMovieData = (movieId) => {
  const { image, cast } = movies.find(({ id }) => id == movieId);
  const actorList = retrieveActorList(cast);
  return { movieCover: image, actorList: actorList };
};

export const retriveSelectedActorData = (actorId) => {
  const {
    image,
    name,
    character: role,
  } = actors.find(({ id }) => id == actorId);
  const { id: movieId, title: movieTitle } = movies.find(({ cast }) =>
    cast.find(({ id }) => id == actorId)
  );
  return { image, name, role, movieTitle, movieId };
};
