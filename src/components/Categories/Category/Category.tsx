import { Link } from 'react-router-dom';

import styles from './Index.module.scss';

const Category = () => {
  return (
    <div className={styles.hubMenu}>
      <nav className={styles.hubMenuNav}>
        <ul className={styles.hubMenuList}>
          <li className={styles.hubMenuItem}>
            <Link to="/news/politics" className={styles.hubMenuLink}>
              Politics
            </Link>
          </li>
          <li className={styles.hubMenuItem}>
            <Link to="/news/world" className={styles.hubMenuLink}>
              World
            </Link>
          </li>
          <li className={styles.hubMenuItem}>
            <Link to="/news/economy" className={styles.hubMenuLink}>
              Economy
            </Link>
          </li>
          <li className={styles.hubMenuItem}>
            <Link to="/news/movie" className={styles.hubMenuLink}>
              Movie News
            </Link>
          </li>
          <li className={styles.hubMenuItem}>
            <Link to="/news/game" className={styles.hubMenuLink}>
              Game Dev News
            </Link>
          </li>
          <li className={styles.hubMenuItem}>
            <Link to="/news/sports" className={styles.hubMenuLink}>
              Sports
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Category;
