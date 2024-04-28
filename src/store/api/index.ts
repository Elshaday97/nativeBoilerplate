import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '@env';

export const rootApi = createApi({
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  endpoints: () => ({}),
});
