import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';

import search from '../assets/search.svg';

import styles from './Index.module.scss';
import { fetchWeatherData } from '../../../redux/thunks/weatherThunk';

const InputWeather = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleButtonClick = () => {
    dispatch(fetchWeatherData(value));
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
        <img src={search} alt="search" />
      </button>
    </div>
  );
};

export default InputWeather;
