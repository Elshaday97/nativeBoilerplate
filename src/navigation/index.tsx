import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabScreens} from './tabs';
import {ParamList} from './types';

const Tab = createBottomTabNavigator<ParamList>();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarLabelStyle: {
          fontFamily: 'Urbanist-Regular',
          fontSize: 15,
        },
      })}>
      {tabScreens.map(screen => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          options={{
            ...screen.options,
            headerShown: false,
          }}
          initialParams={screen.initialParams}>
          {() => screen.component}
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  );
};

export default MainNavigator;
