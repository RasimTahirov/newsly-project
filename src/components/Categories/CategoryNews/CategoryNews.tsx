import { useFetchNewsCategory } from './helpers/hooks/useFetchNewsCategory';
import { CategoryNewsType } from './helpers/type/type';

import Category from '../Category/Category';

import styles from './Index.module.scss';

const CategoryNews = ({ category }: { category: string }) => {
  const news: CategoryNewsType[] = useFetchNewsCategory({ category });

  return (
    <div>
      <Category />
      <div className={styles.newsContainer}>
        {news.map((item) => (
          <div key={item.id} className={styles.newsItem}>
            <div className={styles.newsContent}>
              <a
                href={item.url}
                className={styles.newsLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={styles.titleWrapper}>
                  <h3 className={styles.newsTitle}>{item.title}</h3>
                </div>
                <div className={styles.imageWrapper}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.newsImage}
                  />
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
