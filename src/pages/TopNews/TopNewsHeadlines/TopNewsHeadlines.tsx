import { useEffect, useState } from 'react';
// import { newsList } from '../utils/utils2';

import styles from './Index.module.scss';
import { getTopNews } from '../../../api/api';

const TopNewsHeadlines = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getTopNews();
      setNewsList(data);
    };

    fetchNews();
  }, []);

  return (
    <div className={styles.newsHeadlinesContainer}>
      <h3 className={styles.newsTitle}>главные новости</h3>
      <div className={styles.newsListWrapper}>
        <ul className={styles.newsList}>
          {newsList.map((list) => (
            <li key={list.id} className={styles.newsListItem}>
              <a href={list.url} className={styles.newsLink}>
                {list.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopNewsHeadlines;
