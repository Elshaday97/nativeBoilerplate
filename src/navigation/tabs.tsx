import React from 'react';
import HomeScreen from '@src/screens/home';
import {TabRoute, TabRouteNamesEnum} from './types';

export const tabRoutes: TabRoute[] = [
  {
    name: TabRouteNamesEnum.Home,
    component: <HomeScreen />,
  },
  {
    name: TabRouteNamesEnum.Components,
    component: <></>,
  },
];
