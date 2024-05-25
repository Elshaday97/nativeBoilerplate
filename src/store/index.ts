import {Reducer, configureStore} from '@reduxjs/toolkit';
import {createReducer} from './reducers';
import {RootState, RootStateKeyType} from './types';
import {rootApi} from './api';
import {NODE_ENV} from '@env';
import {rtkQueryErrorLogger} from './api/errorHandler';

const isDevMode = NODE_ENV === 'development';

const store: any = configureStore({
  reducer: createReducer(),

  middleware: getDefaultMiddleware =>
    [...getDefaultMiddleware(), rootApi.middleware, rtkQueryErrorLogger] as any, // help lol
  devTools: isDevMode,
});

store.asyncReducers = {};

export const injectReducer = (key: RootStateKeyType, reducer: Reducer) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(createReducer(store.asyncReducers));
};

export type RootAppState = RootState & ReturnType<typeof store.getState>;

export default store;
