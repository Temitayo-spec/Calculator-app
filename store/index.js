/* eslint-disable linebreak-style */
import { configureStore } from '@reduxjs/toolkit';
import { calcReducer } from './calcSlice';

export default configureStore({
  reducer: {
    calc: calcReducer,
  },
});
