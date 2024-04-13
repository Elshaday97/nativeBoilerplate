import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

export enum TabRouteNamesEnum {
  Home = 'Home',
  Components = 'Components',
}

export interface TabRoute {
  name: TabRouteNamesEnum;
  component: React.JSX.Element;
  options?: BottomTabNavigationOptions;
  initialParams?: object;
}
