import { createSlice } from '@reduxjs/toolkit';
import { weatherForecastReducers } from '../reducers';

export interface weatherForecast {
  tempMax: number;
  iconWeatherForecast: string;
  weatherDescription: string;
  dateForecast: number;
  loading: boolean;
  error: null | undefined | string;
}

const initialState: weatherForecast = {
  tempMax: 0,
  iconWeatherForecast: '',
  weatherDescription: '',
  dateForecast: 0,
  loading: false,
  error: null,
};

const weatherForecastSlice = createSlice({
  name: 'weatherForecast',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    weatherForecastReducers(builder);
  },
});

export default weatherForecastSlice.reducer;
