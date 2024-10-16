import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../redux/slice/newsSlice';
import weatherReducer from '../redux/slice/weatherSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    weather: weatherReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
