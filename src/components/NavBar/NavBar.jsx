import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { NavBarLayout, navLinkStyling } from "./NavBarLayout";

const NavBar = () => {
  return (
    <header>
      <nav className='navbar'>
        <div className='logo'>Campus Movies</div>
        <div className='menu'>
          <ul>
            {NavBarLayout.map(({ caption, path }, id) => (
              <NavLink key={id} to={path} className={navLinkStyling}>
                {caption}
              </NavLink>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
