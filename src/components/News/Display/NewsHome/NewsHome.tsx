import { useEffect, useState } from 'react';
import styles from './Index.module.scss';
import { getNews } from './api/api';

const NewsHome = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNews();
      setNews(data);
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Live News⚡</h1>
      <div className={styles.container}>
        {news.map((item) => (
          <div key={item.id} className={styles.newsContent}>
            <a href="#!" className={styles.newsLink}>
              <div className={styles.titleWrapper}>
                <h3 className={styles.newsTitle}>{item.title}</h3>
              </div>
              <div className={styles.imageWrapper}>
                <img src={item.image} alt="" className={styles.newsImage} />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsHome;
