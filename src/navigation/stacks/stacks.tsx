import React from 'react';
import HomeScreen from '@src/screens/home';
import {RouteNamesEnum} from '../types';
import {StackScreenConfig} from './types';

export const unAuthenticatedStack: StackScreenConfig[] = [
  {
    name: RouteNamesEnum.SignUp,
    component: <></>,
  },
  {
    name: RouteNamesEnum.LogIn,
    component: <></>,
  },
];

export const homeScreenStack: StackScreenConfig[] = [
  {
    name: RouteNamesEnum.Home,
    component: <HomeScreen />,
    options: {},
  },
];
