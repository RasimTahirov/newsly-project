import SportNews from './SportNews/SportNews';

import styles from './Index.module.scss';

const AllNews = () => {
  return (
    <div className={styles.newsContainer}>
      <SportNews />
    </div>
  );
};

export default AllNews;
