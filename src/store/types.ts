import {AnyAction, Reducer} from '@reduxjs/toolkit';
import {HomeScreenState} from '@src/screens/home/slice/types';

export interface RootState {
  homeScreen?: HomeScreenState;
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
