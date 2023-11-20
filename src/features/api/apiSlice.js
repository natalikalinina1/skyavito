import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const BASE_URL = 'http://localhost:8090/'

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
})

export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
})
