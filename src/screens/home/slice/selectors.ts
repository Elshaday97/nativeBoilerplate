import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '@src/store/types';

const selectSlice = (state: RootState) => state?.homeScreen;

export const selectHomeScreenData = createSelector(
  [selectSlice],
  state => state?.data,
);
