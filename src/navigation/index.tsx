import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {tabRoutes} from './tabs';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarLabelStyle: {
          fontFamily: 'Urbanist-Regular',
          fontSize: 15,
        },
      })}>
      {tabRoutes.map(route => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          options={route.options}
          initialParams={route.initialParams}>
          {() => route.component}
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  );
};

export default MainNavigator;
