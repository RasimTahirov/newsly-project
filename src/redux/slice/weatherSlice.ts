import { createSlice } from '@reduxjs/toolkit';
import { weatherReducers } from '../reducers';

interface weatherData {
  city: string;
  temp: number;
  isDay: boolean;
  weatherText: string;
  windKph: number;
  windDir: string;
  humidity: number;
  imageWeather: string;
}

interface weatherDataTest {
  weather: weatherData[];
  loading: boolean;
  error: null | undefined | string;
}

const initialState: weatherDataTest = {
  weather: [],
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    weatherReducers(builder);
  },
});

export default weatherSlice.reducer;
