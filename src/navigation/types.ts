import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

export enum RouteNamesEnum {
  HomeScreen = 'HomeScreen',
  Home = 'Home',
  Components = 'Components',
}

export type ParamList = {
  HomeScreen: object;
  Home: object;
  Components: undefined;
};

export interface TabScreenConfig {
  name: RouteNamesEnum;
  component: React.JSX.Element;
  options?: BottomTabNavigationOptions;
  initialParams?: object;
}
