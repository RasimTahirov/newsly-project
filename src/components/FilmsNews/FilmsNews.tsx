import { useEffect, useState } from 'react';
import { getFilmsNews } from './api/api';

import test from './assets/1.png';
import tests from './assets/123.jpg';

import styles from './Index.module.scss';

const FilmsNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getFilmsNews();
      setNews(data);
    };

    fetchNews();
  }, []);

  return (
    <div>
      <div className={styles.background}>
        <p className={styles.heading}>новости кино</p>
        <img src={test} alt="" className={styles.image} />
      </div>
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
      {/* Проверка при лимите API */}
      {/* <div className={styles.test10}>
        <div className={styles.test1}>
          <div className={styles.test2}>
            <a href="#" className={styles.test3}>
              <div className={styles.test4}>
                <h3 className={styles.test5}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                  id, reprehenderit consequatur maiores omnis possimus!
                </h3>
              </div>
              <div className={styles.test5}>
                <img src={tests} alt="" className={styles.test6} />
              </div>
            </a>
          </div>
        </div>
        <div className={styles.test1}>
          <div className={styles.test2}>
            <a href="#" className={styles.test3}>
              <div className={styles.test4}>
                <h3 className={styles.test5}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
                  id, reprehenderit consequatur maiores omnis possimus!
                </h3>
              </div>
              <div className={styles.test5}>
                <img src={tests} alt="" className={styles.test6} />
              </div>
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FilmsNews;
