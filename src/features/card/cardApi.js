import { apiSlice } from '../api/apiSlice'

export const cardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCard: builder.query({
      query: () => '/ads',
    }),
    getAddById: builder.query({
      query: (id) => `ads/${id}`,
    }),
    getCurrentUserAdds: builder.query({
      query: () => 'card/me',
    }),
   
  }),
})

export const { useGetAllCardQuery,useGetAddByIdQuery} =
cardApi
