// useInternetConnectivity.ts
import {useEffect} from 'react';
import NetInfo, {NetInfoStateType} from '@react-native-community/netinfo';
import Toast from 'react-native-simple-toast';

const useInternetConnectivity = () => {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.type === NetInfoStateType.none) {
        Toast.show('No internet connection', Toast.SHORT);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return null;
};

export default useInternetConnectivity;
