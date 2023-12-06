import { apiSlice } from '../api/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => ({
        url: 'auth/login',
        method: 'POST',
        body,
      }),
    }),
    signUserUp: builder.mutation({
      query: (body) => ({
        url: 'auth/register',
        method: 'POST',
        body,
      }),
    }),
    updateTokens: builder.mutation({
      query: (body) => ({
        url: 'auth/login',
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation,
  useSignUserUpMutation,
  useUpdateTokensMutation,
} = authApiSlice;