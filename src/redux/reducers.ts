import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import { NewsState } from './slice/newsSlice';
import {
  getCustomWeatherIconPatchDay,
  getCustomWeatherIconPatchNight,
} from '../utils/getCustomIconWeather';
import {
  fetchWeatherData,
  fetchWeatherDataForecast,
} from './thunks/weatherThunk';
import { fetchNewsCategory, fetchNewsTop } from './thunks/newsThunk';
import { WeatherState } from './slice/weatherSlice';
import { weatherForecast } from './slice/weatherForecastSlice';

interface WeatherForecast {
  forecast: {
    forecastday: Array<{
      date: number;
      day: {
        maxtemp_c: number;
        condition: {
          text: string;
        };
      };
    }>;
  };
}

interface WeatherCurrent {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    wind_dir: string;
    wind_kph: number;
    humidity: number;
    is_day: number;
    condition: {
      text: string;
    };
  };
}

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

export const weatherCurrentReducers = (
  builder: ActionReducerMapBuilder<WeatherState>
) => {
  builder
    .addCase(fetchWeatherData.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(
      fetchWeatherData.fulfilled,
      (state, action: PayloadAction<WeatherCurrent>) => {
        state.loading = false;
        state.city = action.payload.location.name;
        state.temp = action.payload.current.temp_c;
        state.windDir = action.payload.current.wind_dir;
        state.windKph = action.payload.current.wind_kph;
        state.humidity = action.payload.current.humidity;
        state.weatherText = action.payload.current.condition.text;
        state.isDay = action.payload.current.is_day === 1;

        state.imageWeather =
          action.payload.current.is_day === 1
            ? getCustomWeatherIconPatchDay(
                action.payload.current.condition.text
              )
            : getCustomWeatherIconPatchNight(
                action.payload.current.condition.text
              );
      }
    )
    .addCase(fetchWeatherData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
};

export const weatherForecastReducers = (
  builder: ActionReducerMapBuilder<weatherForecast>
) => {
  builder
    .addCase(fetchWeatherDataForecast.pending, (state) => {
      state.loading = true;
      state.error = null;
    })

    .addCase(
      fetchWeatherDataForecast.fulfilled,
      (state, action: PayloadAction<WeatherForecast>) => {
        state.loading = false;
        state.tempMax = action.payload.forecast.forecastday[1].day.maxtemp_c;
        state.weatherDescription =
          action.payload.forecast.forecastday[1].day.condition.text;
        state.dateForecast = action.payload.forecast.forecastday[1].date;

        state.iconWeatherForecast = getCustomWeatherIconPatchDay(
          action.payload.forecast.forecastday[1].day.condition.text
        );
      }
    )
    .addCase(fetchWeatherDataForecast.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
};
