import WeatherForecastTomorrow from './WeatherForecastTomorrow/WeatherForecastTomorrow';
import CurrentWeather from './CurrentWeather/CurrentWeather';
import InputWeather from './InputWeather/InputWeather';

import styles from './Index.module.scss';

const WeatherComponents = () => {
  return (
    <div className={styles.containerWeather}>
      <InputWeather />
      <CurrentWeather />
      <WeatherForecastTomorrow />
    </div>
  );
};

export default WeatherComponents;
