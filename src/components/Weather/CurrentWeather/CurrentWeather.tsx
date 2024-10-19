import { useSelector } from 'react-redux';
import { formateTemperature } from '../../../utils/formateTemperature';

import windImg from '../../../../public/assets/icon/wind.svg';
import humidityImg from '../../../../public/assets/icon/humidity.svg';

import styles from './Index.module.scss';

const CurrentWeather = () => {
  const {
    city,
    temp,
    windDir,
    windKph,
    humidity,
    weatherText,
    imageWeather,
    loading,
    error,
  } = useSelector((state) => state.weather);

  const temperature = formateTemperature(temp);

  return (
    <div className={styles.containerWeather}>
      <div className={styles.weatherColumns}>
        <h4 className={styles.cityTitle}>{city}</h4>
        <div className={styles.weatherDashboard}>
          <div className={styles.weatherDetails}>
            <img src={windImg} alt="wind" />
            <span className={styles.weatherDetailsText}>{windDir}</span>
            <span className={styles.weatherDetailsText}>{windKph}kph</span>
          </div>
          <div className={styles.weatherDetails}>
            <img src={humidityImg} alt="humidity" />
            <span className={styles.weatherDetailsText}>{humidity}%</span>
          </div>
        </div>
        <div className={styles.weatherCurrentWidget}>
          <img src={imageWeather} alt="Weather" className={styles.imgWeather} />
          <div className={styles.weatherDetailsCurrent}>
            <span className={styles.weatherDetailsCurrentText}>
              {weatherText}
            </span>
            <span className={styles.currentTemperature}>{temperature}°</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
