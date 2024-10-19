import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import {
  fetchWeatherData,
  fetchWeatherDataForecast,
} from '../../../redux/thunks/weatherThunk';

import searchIcon from '../../../../public/assets/icon/search.svg';

import styles from './Index.module.scss';

const InputWeather = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const loadDefaultCityWeather = (city: string) => {
    dispatch(fetchWeatherData(city));
    dispatch(fetchWeatherDataForecast(city));
    setValue(city);
  };

  useEffect(() => {
    const saveCity = localStorage.getItem('city');
    if (saveCity) {
      loadDefaultCityWeather(saveCity);
    } else {
      loadDefaultCityWeather('New-York');
    }
  }, [dispatch]);

  const handleButtonClick = () => {
    dispatch(fetchWeatherData(value));
    dispatch(fetchWeatherDataForecast(value));
    localStorage.setItem('city', value);
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleButtonClick();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  return (
    <div className={styles.containerInput}>
      <input
        type="text"
        value={value}
        onInput={handleInputChange}
        onKeyDown={handleInputKeyPress}
        placeholder="Введите город"
        className={styles.inputWeather}
      />
      <button className={styles.searchWeather} onClick={handleButtonClick}>
        <img src={searchIcon} alt="search" />
      </button>
    </div>
  );
};

export default InputWeather;
