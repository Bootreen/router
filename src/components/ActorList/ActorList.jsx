// import "./MovieList.css";
import { actors } from "../../data/actors";
import { useNavigate } from "react-router-dom";

const ActorList = () => {
  const navigate = useNavigate();
  return (
    <table className='actor-list'>
      <tbody>
        {actors.map(({ id, name, popularity, image }) => (
          <tr key={id} onClick={() => navigate(`/actors/${id}`)}>
            <td>
              <img src={image} />
            </td>
            <td className='actor-name'>
              <strong>{name}</strong>
            </td>
            <td>Popularity: {popularity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ActorList;
