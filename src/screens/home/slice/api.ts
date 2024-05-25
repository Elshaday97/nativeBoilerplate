import {rootApi} from '@src/store/api';
import {apiRoutes} from '@src/store/api/routes';
import {HomeScreenData} from './types';

export const homeScreenApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    getHomeScreenData: builder.query<HomeScreenData, void>({
      query: () => ({url: apiRoutes.homeScreenRoutes.getHomeScreenData}),
    }),
  }),
});

export const {useGetHomeScreenDataQuery} = homeScreenApi;
