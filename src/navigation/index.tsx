import React from 'react';
import AuthenticatedNavigator from './navigation';
import {UnAuthenticatedStack} from './stacks';

const MainNavigator = () => {
  const isAuthenticated = true; // Add custom logic

  return isAuthenticated ? (
    <AuthenticatedNavigator />
  ) : (
    <UnAuthenticatedStack />
  );
};

export default MainNavigator;
