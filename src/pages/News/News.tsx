import Category from '../../components/Category/Category';
import NewsHome from '../../components/News/Display/NewsHome/NewsHome';

import styles from './Index.module.scss';

const News = () => {
  return (
    <main>
      <section className={styles.sectionNews}>
        <Category />
        <NewsHome />
      </section>
    </main>
  );
};

export default News;
