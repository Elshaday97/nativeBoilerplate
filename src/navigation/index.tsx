import React from 'react';
import AuthenticatedNavigator from './navigation';
import {UnAuthenticatedStack} from './stacks';
import {useAuth} from '@src/auth/useAuth';
import useInternetConnectivity from '@src/hooks/useInternetConnectivity';

const MainNavigator = () => {
  const {isAuthenticated} = useAuth();
  useInternetConnectivity();

  return isAuthenticated ? (
    <AuthenticatedNavigator />
  ) : (
    <UnAuthenticatedStack />
  );
};

export default MainNavigator;
