import { movies } from "../data/movies";
import { actors } from "../data/actors";

const retrieveActorList = (cast) =>
  cast
    .map(({ id, character }) => ({
      ...actors.find(({ id: actorId }) => id === actorId),
      // get role from selected movie, not from the actor record
      role: character,
    }))
    .map(({ id, name, image, role }) => ({
      id: id,
      actor: name,
      role: role,
      image: image,
    }));

export const selectedMovie = (currentMovieId) => {
  if (currentMovieId === 0) return false;
  else {
    const { image, cast } = movies.find(({ id }) => id === currentMovieId);
    const actorList = retrieveActorList(cast);
    return { movieCover: image, actorList: actorList };
  }
};
