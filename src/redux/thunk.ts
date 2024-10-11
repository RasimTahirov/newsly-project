import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchNews } from '../services/api/api';

export const fetchNewsTest = createAsyncThunk(
  'news/fetchNewsTest',
  async () => {
    const res = await fetchNews('general');
    return res;
  }
);

export const fetchNewsCategory = createAsyncThunk(
  'news/fetchNewsCategory',
  async (category: string) => {
    const res = await fetchNews(category);
    return res;
  }
);
