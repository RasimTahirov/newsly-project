import { Link } from 'react-router-dom';

import styles from './Index.module.scss';

const Category = () => {
  return (
    <div className={styles.hubMenu}>
      <nav className={styles.hubMenuNav}>
        <ul className={styles.hubMenuList}>
          <li className={styles.hubMenuItem}>
            <Link to="/politics" className={styles.hubMenuLink}>
              Политика
            </Link>
          </li>
          <li className={styles.hubMenuItem}>
            <Link to="/world" className={styles.hubMenuLink}>
              Мир
            </Link>
          </li>
          <li className={styles.hubMenuItem}>
            <Link to="/economy" className={styles.hubMenuLink}>
              Экономика
            </Link>
          </li>
          <li className={styles.hubMenuItem}>
            <Link to="/movies" className={styles.hubMenuLink}>
              Новости кино
            </Link>
          </li>
          <li className={styles.hubMenuItem}>
            <Link to="games" className={styles.hubMenuLink}>
              Новости геймдева
            </Link>
          </li>
          <li className={styles.hubMenuItem}>
            <Link to="sports" className={styles.hubMenuLink}>
              Спорт
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Category;
