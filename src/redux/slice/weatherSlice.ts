import { createSlice } from '@reduxjs/toolkit';
import { weatherCurrentReducers } from '../reducers';

export interface WeatherState {
  city: string;
  temp: number;
  windDir: string;
  windKph: number;
  humidity: number;
  weatherText: string;
  imageWeather: string;
  isDay: boolean;
  loading: boolean;
  error: null | undefined | string;
}

const initialState: WeatherState = {
  city: '',
  temp: 0,
  windDir: '',
  windKph: 0,
  humidity: 0,
  weatherText: '',
  imageWeather: '',
  isDay: false,
  loading: false,
  error: null,
};

const weatherCurrentSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    weatherCurrentReducers(builder);
  },
});

export default weatherCurrentSlice.reducer;
