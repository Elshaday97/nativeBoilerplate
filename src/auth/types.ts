import {UserModel} from '@src/models/user';

export interface AuthState {
  user?: UserModel;
  isGettingUser?: boolean;
}

export interface AuthCredentials {
  username: string;
  password: string;
}

export interface AuthenticationResponse {
  user: UserModel;
  token: string;
  rfToken: string;
}

export interface UseAuthResponse {
  user?: UserModel;
  isAuthenticated: boolean;
  logIn: (credentials: AuthCredentials) => Promise<void>;
  logOut: () => Promise<void>;
  loadAuthState: () => Promise<void>;
}
