import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWeather } from '../../services/api/api';

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData',
  async (city: string) => {
    const res = await fetchWeather(city);
    return res;
  }
);
