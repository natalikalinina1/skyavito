import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allCard: null,
  currentAdd: null,
  search: null,
  users: null,
  currentAddImages: null,
  userCard: null,
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
    setCurrentAddImages: (state, action) => {
      state.currentAddImages = action.payload
    },
    setUserCard: (state, action) => {
      state.userCard = action.payload
    },
  },
})

export const { getAllCard, getCurrentAdd, getSearchValue, getUsers, setCurrentAddImages, setUserCard } =
cardSlice.actions

export default cardSlice.reducer
