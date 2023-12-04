import { apiSlice } from '../api/apiSlice';

export const reviewApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllReviews: builder.query({
      query: () => 'comments',
      providesTags: ['Review'],
    }),
    getReviewById: builder.query({
      query: (id) => `ads/${id}/comments/`,
      providesTags: ['Review'],
    }),
    addReview: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `ads/${id}/comments`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Review'],
    }),
  }),
});

export const { useGetAllReviewsQuery,useGetReviewByIdQuery, useAddReviewMutation} = reviewApi;