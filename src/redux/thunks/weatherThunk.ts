import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchForecast, fetchWeather } from '../../services/api/api';

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData',
  async (city: string) => {
    const res = await fetchWeather(city);
    return res;
  }
);

export const fetchWeatherDataForecast = createAsyncThunk(
  'weather/fetchWeatherDataForecast',
  async (city: string) => {
    const res = await fetchForecast(city);
    return res;
  }
);
