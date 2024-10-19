import LiveNews from '../../components/News/LiveNews/NewsHome';

import styles from './Index.module.scss';

const News = () => {
  return (
    <main>
      <section className={styles.sectionNews}>
        <LiveNews />
      </section>
    </main>
  );
};

export default News;
