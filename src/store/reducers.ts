import {combineReducers} from '@reduxjs/toolkit';
import {AsyncReducersType} from './types';

export const createReducer = (asyncReducers: AsyncReducersType = {}) => {
  if (Object.keys(asyncReducers).length === 0) {
    return (state: any) => state;
  } else {
    return combineReducers({...asyncReducers});
  }
};
