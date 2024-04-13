import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {HomeScreenData, HomeScreenState} from './types';
import {injectReducer} from '@src/store';

export const initialState: HomeScreenState = {
  isGettingData: false,
  data: undefined,
};

const slice = createSlice({
  name: 'homeScreen',
  initialState,
  reducers: {
    getData(state) {
      state.isGettingData = true;
    },
    setData(state, action: PayloadAction<HomeScreenData>) {
      state.data = action.payload;
    },
    setIsGettingData(state, action: PayloadAction<boolean>) {
      state.isGettingData = action.payload;
    },
  },
});
export const homeReducer = slice.reducer;

export const useHomeScreenSlice = () => {
  injectReducer('homeScreen', slice.reducer);
  return {actions: slice.actions};
};
