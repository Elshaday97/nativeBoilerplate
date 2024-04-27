import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ParamList} from '../types';
import {homeScreenStack} from './stacks';

const Stack = createNativeStackNavigator<ParamList>();

export const HomeScreenStack = () => {
  return (
    <Stack.Navigator>
      {homeScreenStack.map(screen => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          options={screen.options}
          initialParams={screen.initialParams}>
          {() => screen.component}
        </Stack.Screen>
      ))}
    </Stack.Navigator>
  );
};
