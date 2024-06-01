import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

export enum RouteNamesEnum {
  HomeScreen = 'HomeScreen',
  Home = 'Home',
  Components = 'Components',
  LogIn = 'LogIn',
  SignUp = 'SignUp',
}

export type ParamList = {
  HomeScreen: object;
  Home: object;
  Components: undefined;
  LogIn: undefined;
  SignUp: undefined;
};

export interface TabScreenConfig {
  name: RouteNamesEnum;
  component: React.JSX.Element;
  options?: BottomTabNavigationOptions;
  initialParams?: object;
}
