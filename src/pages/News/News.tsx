import AllNews from '../../components/AllNews/AllNews';

import styles from './Index.module.scss';

const News = () => {
  return (
    <section className={styles.sectionNews}>
      <AllNews />
    </section>
  );
};

export default News;
