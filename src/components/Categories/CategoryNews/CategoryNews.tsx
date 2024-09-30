import { useEffect, useState } from 'react';
import { getNewsByCategory } from './api/api';

import Category from '../Category/Category';

import styles from './Index.module.scss';

const CategoryNews = ({ category }: { category: string }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getNewsByCategory(category);
      setNews(data);
    };

    fetchNews();
  }, [category]);

  return (
    <div>
      <Category />
      <div className={styles.newsContainer}>
        {news.map((item) => (
          <div key={item.id} className={styles.newsItem}>
            <div className={styles.newsContent}>
              <a href={item.url} className={styles.newsLink}>
                <div className={styles.titleWrapper}>
                  <h3 className={styles.newsTitle}>{item.title}</h3>
                </div>
                <div className={styles.imageWrapper}>
                  <img src={item.image} alt="" className={styles.newsImage} />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
