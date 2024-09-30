import { Link } from 'react-router-dom';

import styles from './Index.module.scss';

const Category = () => {
  return (
    <div className={styles.hubMenu}>
      <nav className={styles.hubMenuNav}>
        <ul className={styles.hubMenuList}>
          <li className={styles.hubMenuItem}>
            <Link to="/news/politics" className={styles.hubMenuLink}>
              Политика
            </Link>
          </li>
          <li className={styles.hubMenuItem}>
            <Link to="/news/world" className={styles.hubMenuLink}>
              Мир
            </Link>
          </li>
          <li className={styles.hubMenuItem}>
            <Link to="/news/economy" className={styles.hubMenuLink}>
              Экономика
            </Link>
          </li>
          <li className={styles.hubMenuItem}>
            <Link to="/news/movie" className={styles.hubMenuLink}>
              Новости кино
            </Link>
          </li>
          <li className={styles.hubMenuItem}>
            <Link to="/news/game" className={styles.hubMenuLink}>
              Новости геймдева
            </Link>
          </li>
          <li className={styles.hubMenuItem}>
            <Link to="/news/sports" className={styles.hubMenuLink}>
              Спорт
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Category;
