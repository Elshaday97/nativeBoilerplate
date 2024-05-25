import {isRejectedWithValue} from '@reduxjs/toolkit';
import type {Middleware} from '@reduxjs/toolkit';
import Toast from 'react-native-simple-toast';

export const rtkQueryErrorLogger: Middleware = () => next => action => {
  if (isRejectedWithValue(action)) {
    Toast.show(
      'data' in action.error
        ? (action.error.data as {message: string}).message
        : action.error.message || '',
      Toast.SHORT,
    );
  }

  return next(action);
};
