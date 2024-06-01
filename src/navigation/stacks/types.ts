import React from 'react';
import {RouteNamesEnum} from '../types';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export interface StackScreenConfig {
  name: RouteNamesEnum;
  component: React.JSX.Element;
  options?: NativeStackNavigationOptions;
  initialParams?: object;
}
