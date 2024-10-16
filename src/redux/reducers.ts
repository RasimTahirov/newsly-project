import { NewsState } from './slice/newsSlice';
import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import {
  getCustomWeatherIconPatchDay,
  getCustomWeatherIconPatchNigth,
} from '../utils/getCustomIconWeather';
import { fetchWeatherData } from './thunks/weatherThunk';
import { fetchNewsCategory, fetchNewsTop } from './thunks/newsThunk';

export const newsReducers = (builder: ActionReducerMapBuilder<NewsState>) => {
  builder
    .addCase(fetchNewsTop.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchNewsTop.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload;
    })
    .addCase(fetchNewsTop.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

  builder
    .addCase(fetchNewsCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchNewsCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload;
    })
    .addCase(fetchNewsCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
};

export const weatherReducers = (builder) => {
  builder
    .addCase(fetchWeatherData.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.loading = false;
      state.city = action.payload.location.name;
      state.temp = action.payload.current.temp_c;
      state.windDir = action.payload.current.wind_dir;
      state.windKph = action.payload.current.wind_kph;
      state.humidity = action.payload.current.humidity;
      state.weatherText = action.payload.current.condition.text;
      state.idDay = action.payload.current.is_day;

      if (action.payload.current.is_day === 1) {
        state.imageWeather = getCustomWeatherIconPatchDay(
          action.payload.current.condition.text
        );
      } else {
        state.imageWeather = getCustomWeatherIconPatchNigth(
          action.payload.current.condition.text
        );
      }
    })
    .addCase(fetchWeatherData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
};
