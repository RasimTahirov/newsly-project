import { useEffect, useState } from 'react';
// import { news } from '../utils/utils';

import styles from './Index.module.scss';
import { getTopNews } from '../../../api/api';

const TopNewsWithImages = () => {
  const [news, setNews] = useState([]);

  const formateDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const formattedDate = date.toISOString().split('T')[0];
    const formattedTime = date.toTimeString().split(':').slice(0, 2).join(':');

    return `${formattedDate} / ${formattedTime}`;
  };

  useEffect(() => {
    const fetchNews = async () => {
      const data = await getTopNews();
      setNews(data);
    };

    fetchNews();
  }, []);

  return (
    <>
      <div className={styles.newsWithImagesContainer}>
        {news.map((item) => (
          <div key={item.uuid} className={styles.newsCard}>
            <a href={item.url}>
              <img src={item.image_url} alt="" className={styles.newsImage} />
            </a>
            <div className={styles.newsSourceAndDate}>
              <a href={item.url} className={styles.newsText}>
                {item.source}
              </a>
              <p className={styles.time}>
                {formateDateTime(item.published_at)}
              </p>
            </div>
            <div className={styles.newsTitleWrapper}>
              <p className={styles.newsText}>
                <a href={item.url} className={styles.newsText}>
                  {item.title}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopNewsWithImages;
