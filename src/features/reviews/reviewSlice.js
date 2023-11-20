import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  reviews: null,
}

const reviewSlice = createSlice({
  name: 'reviews',
  initialState: initialState,
  reducers: {
    getReviews: (state, action) => {
      state.reviews = action.payload
    },
  },
})

export const {  getReviews } = reviewSlice.actions

export default reviewSlice.reducer