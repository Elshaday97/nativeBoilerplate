import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '@src/store/types';

const selectSlice = (state: RootState) => state?.homeScreen;

// Breakdown into individual selectors as needed

export const selectHomeScreenState = createSelector(
  [selectSlice],
  state => state,
);
