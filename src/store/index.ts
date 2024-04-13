import {Reducer, configureStore} from '@reduxjs/toolkit';
import {createReducer} from './reducers';
import {RootStateKeyType} from './types';

const store: any = configureStore({
  reducer: createReducer(),
});

store.asyncReducers = {};

export const injectReducer = (key: RootStateKeyType, reducer: Reducer) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
};

export default store;
