import "./ActorDetails.css";
import { NavLink, useParams } from "react-router-dom";
import { retriveSelectedActorData } from "../../utils/db-utils";

const ActorDetails = () => {
  const { actorId } = useParams();
  const { image, name, role, movieTitle, movieId } =
    retriveSelectedActorData(actorId);
  return (
    <div className='actor-details'>
      <h2>{name}</h2>
      <div className='actor-image'>
        <img src={image} />
      </div>
      <h3>
        Played {role} in{" "}
        <NavLink to={`/movies/${movieId}`}>{movieTitle}</NavLink>
      </h3>
    </div>
  );
};

export default ActorDetails;
