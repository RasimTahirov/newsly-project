import TopNewsHeadlines from '../TopNews/TopNewsHeadlines/TopNewsHeadlines';
import TopNewsWithImages from '../TopNews/TopNewsWithImages/TopNewsWithImages';

import styles from './Index.module.scss';

const Home = () => {
  return (
    <div className={styles.selection}>
      <TopNewsWithImages />
      <TopNewsHeadlines />
    </div>
  );
};

export default Home;
