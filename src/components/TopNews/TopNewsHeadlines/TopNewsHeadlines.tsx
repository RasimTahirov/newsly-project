import { useFetchTopNews } from '../helpers/hooks/useFetchNews';
import { TopNews } from '../helpers/type/type';

import styles from './Index.module.scss';

const TopNewsHeadlines = () => {
  const newsList: TopNews[] = useFetchTopNews();

  return (
    <div className={styles.newsHeadlinesContainer}>
      <h3 className={styles.newsTitle}>главные новости</h3>
      <div className={styles.newsListWrapper}>
        <ul className={styles.newsList}>
          {newsList.map((news) => (
            <li key={news.uuid} className={styles.newsListItem}>
              <a
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.newsLink}
              >
                {news.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopNewsHeadlines;
