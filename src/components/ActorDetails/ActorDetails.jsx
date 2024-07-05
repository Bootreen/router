// import "./MoviePreview.css";
import { useParams } from "react-router-dom";
import { retriveSelectedActorData } from "../../utils/db-utils";

const ActorDetails = () => {
  const { actorId } = useParams();
  const { image, name, role, movieTitle } = retriveSelectedActorData(actorId);
  return (
    <div className='actor-details'>
      <h2>{name}</h2>
      <div className='actor-image'>
        <img src={image} />
      </div>
      <h3>
        Played {role} in {movieTitle}
      </h3>
    </div>
  );
};

export default ActorDetails;
