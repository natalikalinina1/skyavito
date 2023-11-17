import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  card: null,
}

const cardSlice = createSlice({
  name: 'card',
  initialState: initialState,
  reducers: {
    getCard: (state, action) => {
      state.card = action.payload
    },
  },
})

export const { getCard } = cardSlice.actions

export default cardSlice.reducer
