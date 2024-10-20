import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import { formateTemperature } from '../../../utils/formateTemperature';

import styles from './Index.module.scss';

const WeatherForecastTomorrow = () => {
  const {
    tempMax,
    iconWeatherForecast,
    weatherDescription,
    dateForecast,
    loading,
  } = useSelector((state: RootState) => state.weatherForecast);

  const apiDate = new Date(dateForecast);

  const formattedDate = apiDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
  });

  const formattedDateWeekday = apiDate.toLocaleDateString('en-US', {
    weekday: 'short',
  });

  const temperature = formateTemperature(tempMax);

  if (loading) {
    return <></>;
  }

  return (
    <>
      <h2 className={styles.forecastTitle}>Погода на завтра</h2>
      <div className={styles.weatherForecast}>
        <article className={styles.weatherContainer}>
          <div className={styles.dateInfo}>
            <time className={styles.weekday}>{formattedDateWeekday}</time>
            <time className={styles.date}>{formattedDate}</time>
          </div>
          <div></div>
        </article>
        <div className={styles.iconContainer}>
          <div className={styles.temperatureContainer}>
            <span className={styles.temperature}>{temperature}°</span>
          </div>
          <div className={styles.weatherDescriptionContainer}>
            <p className={styles.description}>{weatherDescription}</p>
            <img
              src={iconWeatherForecast}
              alt="weather"
              className={styles.weatherIcon}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherForecastTomorrow;
