import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allCard: null,
  currentAdd: null,
  search: null,
  users: null,
}

const cardSlice = createSlice({
  name: 'card',
  initialState: initialState,
  reducers: {
    getAllCard: (state, action) => {
      state.allCard = action.payload
    },
    getCurrentAdd: (state, action) => {
      state.currentAdd = action.payload
    },
    getSearchValue: (state, action) => {
      state.search = action.payload
    },
    getUsers: (state, action) => {
      state.users = action.payload
    },
  },
})

export const { getAllCard, getCurrentAdd, getSearchValue, getUsers } =
cardSlice.actions

export default cardSlice.reducer
