import React from 'react';
import {TabScreenConfig, RouteNamesEnum} from './types';
import {HomeScreenStack} from './stacks';

export const tabScreens: TabScreenConfig[] = [
  {
    name: RouteNamesEnum.HomeScreen,
    component: <HomeScreenStack />,
    options: {
      tabBarLabel: 'Home',
      headerShown: false,
    },
  },
  {
    name: RouteNamesEnum.OtherScreen,
    component: <></>,
    options: {
      tabBarLabel: 'Other Screen',
      title: 'Other Screen',
    },
  },
];
