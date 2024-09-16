
import { Link } from 'react-router-dom';
import styles from './Index.module.scss';

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>
            Главная
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/news" className={styles.navLink}>
            Новости
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="weather" className={styles.navLink}>
            Погода
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="test3" className={styles.navLink}>
            Курс
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
