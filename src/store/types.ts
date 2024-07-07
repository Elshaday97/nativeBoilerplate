import {AnyAction, Reducer} from '@reduxjs/toolkit';
import {AuthState} from '@src/auth/types';
import {HomeScreenState} from '@src/screens/home/slice/types';

export interface RootState {
  api?: any; // FIXME:
  homeScreen?: HomeScreenState;
  auth?: AuthState;
}

type RequiredState = Required<RootState>;
export type RootStateKeyType = keyof RootState;

export type AsyncReducersType = {
  [Y in RootStateKeyType]?: Reducer<RequiredState[Y], AnyAction>;
};

export interface InjectedReducerParam<Key extends RootStateKeyType> {
  key: Key;
  reducer: Reducer<RequiredState[Key], AnyAction>;
}
