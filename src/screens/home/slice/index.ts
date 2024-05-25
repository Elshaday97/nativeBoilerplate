import {createSlice} from '@reduxjs/toolkit';
import {HomeScreenState} from './types';
import {injectReducer} from '@src/store';
import {homeScreenApi} from './api';

export const initialState: HomeScreenState = {};

const slice = createSlice({
  name: 'homeScreen',
  initialState,
  reducers: {
    // someAction(state, action: PayloadAction<T>) {
    // },
  },
});
export const homeReducer = slice.reducer;

export const useHomeScreenSlice = () => {
  injectReducer('homeScreen', slice.reducer);
  injectReducer(homeScreenApi.reducerPath, homeScreenApi.reducer);
  return {actions: slice.actions};
};
