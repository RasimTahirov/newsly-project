import { useEffect, useState } from 'react';

import { getTestNews } from './api/api';

import styles from './Index.module.scss';

const EventsTodayNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getTestNews();
      setNews(data);
    };

    fetchNews();
  }, []);

  return (
    <div className={styles.eventsTodayContainer}>
      <h3 className={styles.title}>sports news</h3>
      <div className={styles.newsGrid}>
        {news.map((item, index) => (
          <div key={item.article_id} className={styles.article}>
            {index === 0 ? (
              <div className={styles.mainArticle}>
                <span className={styles.highlight}>⚡</span>
                <p className={styles.articleTitle}>{item.title}</p>
                <div className={styles.imgContainer}>
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className={styles.newsImageMain}
                  />
                </div>
              </div>
            ) : (
              <div className={styles.secondaryArticle}>
                <div className={styles.articleContainer}>
                  <div>▪️</div>
                  <a className={styles.newsLink}>{item.title}</a>
                </div>
                <div className={styles.imgContainer}>
                  <img
                    src={item.image_url}
                    className={styles.newsImageSecondary}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsTodayNews;
