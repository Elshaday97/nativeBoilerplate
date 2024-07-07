import {rootApi} from '@src/store/api';
import {apiRoutes} from '@src/store/api/routes';
import {UserModel} from '@src/models/user';
import {AuthCredentials} from './types';

export const authApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    getUser: builder.query<UserModel, void>({
      query: () => ({url: apiRoutes.authRoutes.getUser, method: 'GET'}),
    }),
    login: builder.mutation({
      query: (credentials: AuthCredentials) => ({
        url: apiRoutes.authRoutes.logIn,
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const {useGetUserQuery, useLoginMutation} = authApi;
