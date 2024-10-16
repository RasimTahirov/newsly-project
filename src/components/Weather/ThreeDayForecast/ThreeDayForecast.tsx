import weatherImg from '../assets/testWeather.svg';

import styles from './Index.module.scss';

const ThreeDayForecast = () => {
  return (
    <>
      <div className={styles.weatherForecastContainer}>
        <div className={styles.weatherForecas}>
          <div className={styles.dateContainer}>
            <span className={styles.dayOfTheWeek}>Пн</span>
            <span className={styles.date}>14 окт</span>
          </div>
          <div className={styles.iconWeatherContainer}>
            <img
              src={weatherImg}
              alt="weather"
              className={styles.iconWeather}
            />
            <span className={styles.weather}>+8°</span>
          </div>
          <div className={styles.weatherDescriptionContainer}>
            <span className={styles.weatherDescription}>Дождь</span>
          </div>
        </div>
        <div className={styles.weatherForecas}>
          <div className={styles.dateContainer}>
            <span className={styles.dayOfTheWeek}>Пн</span>
            <span className={styles.date}>14 окт</span>
          </div>
          <div className={styles.iconWeatherContainer}>
            <img
              src={weatherImg}
              alt="weather"
              className={styles.iconWeather}
            />
            <span className={styles.weather}>+8°</span>
          </div>
          <div className={styles.weatherDescriptionContainer}>
            <span className={styles.weatherDescription}>Гроза</span>
          </div>
        </div>
        <div className={styles.weatherForecas}>
          <div className={styles.dateContainer}>
            <span className={styles.dayOfTheWeek}>Пн</span>
            <span className={styles.date}>14 окт</span>
          </div>
          <div className={styles.iconWeatherContainer}>
            <img
              src={weatherImg}
              alt="weather"
              className={styles.iconWeather}
            />
            <span className={styles.weather}>+8°</span>
          </div>
          <div className={styles.weatherDescriptionContainer}>
            <span className={styles.weatherDescription}>
              Переменная облачность
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeDayForecast;
