import { Link, useLocation } from 'react-router-dom';

import styles from './Index.module.scss';

const Category = () => {
  const location = useLocation();

  return (
    <div className={styles.hubMenu}>
      <nav className={styles.hubMenuNav}>
        <ul className={styles.hubMenuList}>
          <li className={styles.hubMenuItem}>
            <Link
              to="/news/politics"
              className={
                location.pathname === '/news/politics'
                  ? `${styles.hubMenuLink} ${styles.active}`
                  : styles.hubMenuLink
              }
            >
              Politics
            </Link>
          </li>
          <li className={styles.hubMenuItem}>
            <Link
              to="/news/world"
              className={
                location.pathname === '/news/world'
                  ? `${styles.hubMenuLink} ${styles.active}`
                  : styles.hubMenuLink
              }
            >
              World
            </Link>
          </li>
          <li className={styles.hubMenuItem}>
            <Link
              to="/news/economy"
              className={
                location.pathname === '/news/economy'
                  ? `${styles.hubMenuLink} ${styles.active}`
                  : styles.hubMenuLink
              }
            >
              Economy
            </Link>
          </li>
          <li className={styles.hubMenuItem}>
            <Link
              to="/news/movie"
              className={
                location.pathname === '/news/movie'
                  ? `${styles.hubMenuLink} ${styles.active}`
                  : styles.hubMenuLink
              }
            >
              Movie News
            </Link>
          </li>
          <li className={styles.hubMenuItem}>
            <Link
              to="/news/game"
              className={
                location.pathname === '/news/game'
                  ? `${styles.hubMenuLink} ${styles.active}`
                  : styles.hubMenuLink
              }
            >
              Game Dev News
            </Link>
          </li>
          <li className={styles.hubMenuItem}>
            <Link
              to="/news/sports"
              className={
                location.pathname === '/news/sports'
                  ? `${styles.hubMenuLink} ${styles.active}`
                  : styles.hubMenuLink
              }
            >
              Sports
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Category;
