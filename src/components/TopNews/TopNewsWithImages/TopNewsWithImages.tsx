// import { newsCard } from '../../utils/utils'; // Проверка при лимите API

import { formateDateTime } from '../../../utils/formateDateTime';
import { useFetchNews } from '../helpers/hooks/useFetchNews';
import { TopNews } from '../helpers/type/type';

import styles from './Index.module.scss';

const TopNewsWithImages = () => {
  const newsCard: TopNews[] = useFetchNews();

  return (
    <div className={styles.newsWithImagesContainer}>
      {newsCard.map((news) => (
        <div key={news.uuid} className={styles.newsCard}>
          <a href={news.url} target="_blank" rel="noopener noreferrer">
            <img
              src={news.image_url}
              alt={news.title}
              className={styles.newsImage}
            />
          </a>
          <div className={styles.newsSourceAndDate}>
            <a
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.newsText}
            >
              {news.source}
            </a>
            <p className={styles.time}>{formateDateTime(news.published_at)}</p>
          </div>
          <div className={styles.newsTitleWrapper}>
            <p className={styles.newsText}>
              <a
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.newsText}
              >
                {news.title}
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopNewsWithImages;
