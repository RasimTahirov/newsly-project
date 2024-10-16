import ThreeDayForecast from './ThreeDayForecast/ThreeDayForecast';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import InputWeather from './InputWeather/InputWeather';

import styles from './Index.module.scss';

const WeatherComponents = () => {
  return (
    <div className={styles.containerWeather}>
      <InputWeather />
      <CurrentWeather />
      <ThreeDayForecast />
    </div>
  );
};

export default WeatherComponents;
