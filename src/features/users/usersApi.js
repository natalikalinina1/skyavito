import { apiSlice } from '../api/apiSlice'

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCurrentUser: builder.query({
      query: () => 'user',
      providesTags: ['User'],
    }),
    getAllReviews: builder.query({
      query: () => 'comments',
    }),
    getUsers: builder.query({
      query: () => 'user/all',
      providesTags: ['User'],
    }),
    changeUser: builder.mutation({
      query: (body) => ({
        url: 'user',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['User'],
    }),
    uploadAvatar: builder.mutation({
      query: (body) => ({
        url: 'user/avatar',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
})

export const {
  useGetCurrentUserQuery,
  useGetUsersQuery,
  useChangeUserMutation,
  useUploadAvatarMutation,
} = usersApi