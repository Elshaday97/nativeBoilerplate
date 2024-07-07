import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

export enum RouteNamesEnum {
  // Tabs
  HomeScreen = 'HomeScreen',
  OtherScreen = 'OtherScreen',

  // Other routes
  Home = 'Home',
  LogIn = 'LogIn',
  SignUp = 'SignUp',
}

export type ParamList = {
  HomeScreen: object;
  OtherScreen: undefined;
  Home: object;
  LogIn: undefined;
  SignUp: undefined;
};

export interface TabScreenConfig {
  name: RouteNamesEnum;
  component: React.JSX.Element;
  options?: BottomTabNavigationOptions;
  initialParams?: object;
}
