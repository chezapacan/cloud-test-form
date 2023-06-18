import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userFormApi = createApi({
  reducerPath: 'userFormApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.sbercloud.ru/content/v1/bootcamp/frontend',
  }),
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (userForm) => ({
        url: '',
        method: 'POST',
        body: userForm,
      }),
    }),
  }),
});
