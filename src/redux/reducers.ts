import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { NewsState } from './newsSlice';
import { fetchNewsCategory, fetchNewsTest } from './thunk';

export const newsReducers = (builder: ActionReducerMapBuilder<NewsState>) => {
  builder
    .addCase(fetchNewsTest.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchNewsTest.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload;
    })
    .addCase(fetchNewsTest.rejected, (state, action) => {
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
