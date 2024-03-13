import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const Auth = createApi({
  reducerPath: 'Auth',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dev-api.perfido.ai/' }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({


    login: builder.mutation({
      query: (title) => ({
        url: 'api/v1/auth/users/signin',
        method: 'POST',
        body: title
      }),
      invalidatesTags: ['Auth'],
    }),

    Signup: builder.mutation({
      query: (title) => ({
        url: 'api/v1/auth/users/signup',
        method: 'POST',
        body: title
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {

  useLoginMutation,
  useSignupMutation


} = Auth;