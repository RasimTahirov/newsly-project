import { NavLink } from 'react-router-dom';

import './Index.scss';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="navList">
        <li className="navItem">
          <NavLink to="/" className="navLink">
            Главная
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink to="/news" className="navLink">
            Новости
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink to="weather" className="navLink">
            Погода
          </NavLink>
        </li>
        <li className="navItem">
          <NavLink to="test3" className="navLink">
            Курс
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
