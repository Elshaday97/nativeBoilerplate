// src/auth/useAuth.ts
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@src/store/types';
import {useLoginMutation} from './api';
import {
  AuthCredentials,
  AuthenticationResponse,
  UseAuthResponse,
} from './types';
import {
  getItemFromStorage,
  removeItemFromStorage,
  setItemInStorage,
} from '@src/utils/storage';
import {UserModel} from '@src/models/user';
import {useAuthSlice} from './';

export const useAuth = (): UseAuthResponse => {
  const dispatch = useDispatch();
  const {actions} = useAuthSlice();

  const authState = useSelector((state: RootState) => state.auth);
  const [loginMutation] = useLoginMutation();

  // const isAuthenticated = Boolean(authState?.user);
  const isAuthenticated = true; //TODO: this is temporary, uncomment code above

  const logIn = async (credentials: AuthCredentials): Promise<void> => {
    try {
      const result: AuthenticationResponse = await loginMutation(
        credentials,
      ).unwrap();

      await setItemInStorage('USER', result.user);
      await setItemInStorage('TOKEN', result.token);
      await setItemInStorage('RF_TOKEN', result.rfToken);
      dispatch(actions.setUser(result.user));
      dispatch(actions.setIsGettingUser(false));
    } catch (error) {
      console.error('Failed to login:', error);
      dispatch(actions.setIsGettingUser(false));
    }
  };

  const logOut = async (): Promise<void> => {
    try {
      await removeItemFromStorage('USER');
      await removeItemFromStorage('TOKEN');
      await removeItemFromStorage('RF_TOKEN');

      dispatch(actions.logOut());
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  const loadAuthState = async (): Promise<void> => {
    const storedUser: UserModel | null = await getItemFromStorage('USER');

    if (storedUser) {
      dispatch(actions.setUser(storedUser));
    }
  };

  return {
    ...authState,
    isAuthenticated,
    logIn,
    logOut,
    loadAuthState,
  };
};
