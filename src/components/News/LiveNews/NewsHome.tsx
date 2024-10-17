import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';

import Category from '../NewsCategory/Category/Category';
import ButtonRefresh from '../../UI/ButtonRefresh/ButtonRefresh';
import ErrorMessage from '../../UI/ErrorMessage/ErrorMessage';
import LoadingMessage from '../../UI/LoadingMessage/LoadingMessage';

import styles from './Index.module.scss';
import { fetchNewsTop } from '../../../redux/thunks/newsThunk';

const LiveNews = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    news: newsList,
    loading,
    error,
  } = useSelector((state: RootState) => state.news);

  useEffect(() => {
    dispatch(fetchNewsTop());
  }, [dispatch]);

  if (loading) return <LoadingMessage />;

  if (error)
    return (
      <>
        <ErrorMessage />
        <ButtonRefresh />
      </>
    );

  if (newsList)
    return (
      <div>
        <Category />
        <h1 className={styles.title}>Live News⚡</h1>
        <div className={styles.container}>
          {newsList.map((item) => (
            <div key={item.id} className={styles.newsContent}>
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
                    loading="lazy"
                    className={styles.newsImage}
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
};

export default LiveNews;
