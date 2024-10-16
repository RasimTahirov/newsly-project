import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../store/store';

import Category from '../Category/Category';
import LoadingMessage from '../../../UI/LoadingMessage/LoadingMessage';
import ErrorMessage from '../../../UI/ErrorMessage/ErrorMessage';
import ButtonRefresh from '../../../UI/ButtonRefresh/ButtonRefresh';

import styles from './Index.module.scss';
import { fetchNewsCategory } from '../../../../redux/thunks/newsThunk';

const CategoryNews = ({ category }: { category: string }) => {
  const navigate = useNavigate();
  const goBack = () => navigate('/news');
  const dispatch = useDispatch<AppDispatch>();
  const {
    news: newsList,
    loading,
    error,
  } = useSelector((state: RootState) => state.news);

  useEffect(() => {
    dispatch(fetchNewsCategory(category));
  }, [dispatch, category]);

  if (loading) return <LoadingMessage />;

  if (error)
    return (
      <>
        <ErrorMessage />
        <ButtonRefresh />
      </>
    );

  return (
    <div>
      <Category />
      <button onClick={goBack} className={styles.arrowBtn}>
        &larr;
      </button>
      <div className={styles.newsContainer}>
        {newsList.map((item) => (
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
