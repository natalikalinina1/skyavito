import { apiSlice } from '../api/apiSlice'

export const cardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCard: builder.query({
      query: () => '/ads',
    }),
    getAddById: builder.query({
      query: (id) => `ads/${id}`,
    }),
    getUsers: builder.query({
      query: () => 'user/all',
    }),
  }),
})

export const { useGetAllCardQuery , useGetAddByIdQuery, useGetUsersQuery } =
cardApi
