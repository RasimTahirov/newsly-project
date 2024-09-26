import EventsTodayNews from '../../components/News/Display/EventsTodayNews/EventsTodayNews';

import styles from './Index.module.scss';

const News = () => {
  return (
    <section className={styles.sectionNews}>
      <div>
        <EventsTodayNews />
      </div>
    </section>
  );
};

export default News;
