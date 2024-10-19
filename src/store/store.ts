import { configureStore } from '@reduxjs/toolkit';

import newsReducer from '../redux/slice/newsSlice';
import weatherCurrentReducer from '../redux/slice/weatherSlice';
import weatherForecastReducer from '../redux/slice/weatherForecastSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    weather: weatherCurrentReducer,
    weatherForecast: weatherForecastReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
