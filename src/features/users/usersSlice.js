import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
}

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
      
    },
    changeUserInfo: (state, action) => {
        state.currentUser.name = action.payload.name
        state.currentUser.surname = action.payload.surname
        state.currentUser.phone = action.payload.phone
        state.currentUser.city = action.payload.city
      },
      setCurrentUserPassword: (state, action) => {
        state.currentUser.password = action.payload; // Обновление пароля пользователя в состоянии
      },
  },
})

export const { setCurrentUser, changeUserInfo,setCurrentUserPassword } = usersSlice.actions

export default usersSlice.reducer