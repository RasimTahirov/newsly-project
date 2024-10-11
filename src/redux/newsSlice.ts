import { createSlice } from '@reduxjs/toolkit';
import { newsReducers } from './reducers';

interface newsItem {
  id: number;
  title: string;
  image: string;
  published?: string;
  description?: string;
  category: string;
  author?: string;
  url: string;
}

export interface NewsState {
  news: newsItem[];
  loading: boolean;
  error: null | undefined | string;
}

const initialState: NewsState = {
  news: [],
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    newsReducers(builder);
  },
});

export default newsSlice.reducer;
