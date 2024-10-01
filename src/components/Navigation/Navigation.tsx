import { NavLink } from 'react-router-dom';

import './Index.scss';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="navList">
        <li className="navItem">
          <NavLink to="/" className="navLink">
            Home
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink to="/news" className="navLink">
            News
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink to="weather" className="navLink">
            Weather
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink to="test3" className="navLink">
            Currency
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
