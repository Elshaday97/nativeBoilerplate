import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {AuthState} from './types';
import {injectReducer} from '@src/store';
import {authApi} from './api';
import {UserModel} from '@src/models/user';

export const initialState: AuthState = {
  isGettingUser: false,
  user: undefined,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserModel>) {
      state.user = action.payload;
    },
    setIsGettingUser(state, action: PayloadAction<boolean>) {
      state.isGettingUser = action.payload;
    },
    logOut(state) {
      state.user = undefined;
    },
  },
});

export const authReducer = slice.reducer;

export const useAuthSlice = () => {
  injectReducer('auth', slice.reducer);
  injectReducer(authApi.reducerPath, authApi.reducer);
  return {actions: slice.actions};
};
