import { apiSlice } from '../api/apiSlice'

export const cardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCard: builder.query({
      query: () => '/ads',
    }),
    getMainImg: builder.query({
      query: (id) => `images/${id}`,
    }),
  }),
})

export const { useGetAllCardQuery , useGetMainImgQuery } = cardApi
