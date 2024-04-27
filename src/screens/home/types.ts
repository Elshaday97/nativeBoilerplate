import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamList} from '@src/navigation/types';

export interface HomeScreenProps {}
export type HomeScreenNavigationProps = NativeStackNavigationProp<
  ParamList,
  'Home'
>;

export interface HomeScreenStackNavigatorProps {}
