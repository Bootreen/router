import "./Actors.css";
import ActorList from "../../components/ActorList/ActorList";
import { Outlet } from "react-router-dom";

const Actors = () => (
  <div className='actor-page-container'>
    <ActorList />
    <Outlet />
  </div>
);

export default Actors;
