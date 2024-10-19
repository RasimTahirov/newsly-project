import { createSlice } from '@reduxjs/toolkit';
import { weatherForecastReducers, weatherReducers } from '../reducers';

export interface weatherData {
  city: string;
  temp: number;
  windDir: string;
  windKph: number;
  humidity: number;
  weatherText: string;
  imageWeather: string;
}

export interface WeatherDataState {
  weather: weatherData[];
  loading: boolean;
  error: null | undefined | string;
}

const initialState: WeatherDataState = {
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
    weatherForecastReducers(builder);
  },
});

export default weatherSlice.reducer;
