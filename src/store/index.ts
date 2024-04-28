import {Reducer, configureStore} from '@reduxjs/toolkit';
import {createReducer} from './reducers';
import {RootStateKeyType} from './types';
import {rootApi} from './api';
import {NODE_ENV} from '@env';

const isDevMode = NODE_ENV === 'development';

const store: any = configureStore({
  reducer: createReducer(),
  middleware: getDefaultMiddleware =>
    [...getDefaultMiddleware(), rootApi.middleware] as any, // help lol
  devTools: isDevMode,
});

store.asyncReducers = {};

export const injectReducer = (key: RootStateKeyType, reducer: Reducer) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
};

export default store;
