import {useRoute} from '@react-navigation/native';

const useNavigationParams = <T>(): T => {
  const route = useRoute();
  return route.params as T;
};

export default useNavigationParams;
