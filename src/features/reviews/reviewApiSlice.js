import { apiSlice } from '../api/apiSlice'

export const reviewApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllReviews: builder.query({
      query: () => 'comments',
    }),
    getReviewById: builder.query({
      query: (id) => `ads/${id}/comments/`,
    }),
  }),
})

export const { useGetAllReviewsQuery, useGetReviewByIdQuery } = reviewApiSlice