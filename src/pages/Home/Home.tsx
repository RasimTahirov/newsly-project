import TopNewsHeadlines from '../../components/TopNews/TopNewsHeadlines/TopNewsHeadlines';
import TopNewsWithImages from '../../components/TopNews/TopNewsWithImages/TopNewsWithImages';

import styles from './Index.module.scss';

const Home = () => {
  return (
    <section className={styles.selection}>
      <TopNewsWithImages />
      <TopNewsHeadlines />
    </section>
  );
};

export default Home;
