import { apiSlice } from '../api/apiSlice'

export const cardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCard: builder.query({
      query: () => '/ads',
      providesTags: ['Card'],
    }),
    getAddById: builder.query({
      query: (id) => `ads/${id}`,
      providesTags: ['Card'],
    }),
    getCurrentUserCard: builder.query({
      query: () => 'ads/me',
      providesTags: ['Card'],
    }),
    createAdd: builder.mutation({
      query: (data) => ({
        url: `ads${data.query}`,
        method: 'POST',
        body: data.formData,
      }),
      invalidatesTags: ['Card'],
    }),
    createAddWithNoImages: builder.mutation({
      query: (data) => ({
        url: `ads${data.query}`,
        method: 'POST',
      }),
      invalidatesTags: ['Card'],
    }),
    deleteAdd: builder.mutation({
      query: (id) => ({
        url: `ads/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Card'],
    }),
    changeAdd: builder.mutation({
      query: ({ id, body }) => ({
        url: `ads/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Card'],
    }),
    
    uploadImageToAdd: builder.mutation({
      query: ({ id, body }) => ({
        url: `ads/${id}/image`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Card'],
    }),
    
    deleteAddImage: builder.mutation({
      query: ({ id, query }) => ({
        url: `ads/${id}/image/${query}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Card'],
    }),
  }),
})

export const { useGetAllCardQuery,useGetAddByIdQuery,useCreateAddMutation,
  useCreateAddWithNoImagesMutation,
  useGetCurrentUserCardQuery,
  useDeleteAddMutation,useChangeAddMutation,
  useDeleteAddImageMutation,
  useUploadImageToAddMutation} = cardApi
