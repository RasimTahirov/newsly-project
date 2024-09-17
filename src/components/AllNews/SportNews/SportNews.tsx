import { FakeApi } from '../FakeApi/FakeApi'; // Проверка при лимите API
import { useFetchSportNews } from '../helpers/hooks/useFetchNews';

import styles from './Index.module.scss';

const SportNews = () => {
  const sportsNews = useFetchSportNews();

  return (
    <div className={styles.newsCardContainer}>
      <p className={styles.categoryLabel}>sports</p>
      {sportsNews.map((item) => (
        <div className={styles.newsCard} key={item.uuid}>
          <div className={styles.imageWrapper}>
            <img className={styles.newsImage} src={item.image_url} alt="" />
          </div>
          <p className={styles.newsTitle}>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default SportNews;
