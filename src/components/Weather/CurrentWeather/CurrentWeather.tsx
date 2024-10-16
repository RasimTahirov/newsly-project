import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

import windImg from '../assets/wind.svg';
import humidityImg from '../assets/humidity.svg';

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
  } = useSelector((state: RootState) => state.weather);

  const tempTest = Math.floor(Number(temp));

  const formatTemp = tempTest >= 0 ? `+${tempTest}` : `${tempTest}`;

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
            <span className={styles.currentTemperature}>{formatTemp}°</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
