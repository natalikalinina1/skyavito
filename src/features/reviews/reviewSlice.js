import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allReviews: null,
  currentReview: null,
}

const reviewSlice = createSlice({
  name: 'reviews',
  initialState: initialState,
  reducers: {
    getAllReviews: (state, action) => {
      state.allReviews = action.payload
    },
    getCurrentReview: (state, action) => {
      state.currentReview = action.payload
    },
  },
})

export const { getAllReviews, getCurrentReview } = reviewSlice.actions

export default reviewSlice.reducer