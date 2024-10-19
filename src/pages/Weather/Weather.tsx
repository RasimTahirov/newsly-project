import WeatherComponents from '../../components/Weather/WeatherComponents';

import styles from './Index.module.scss';

const Weather = () => {
  return (
    <main>
      <section className={styles.section}>
        <WeatherComponents />
      </section>
    </main>
  );
};

export default Weather;
