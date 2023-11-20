import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  access: null,
  refresh: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    signUp: (state, action) => {
      const { email, password } = action.payload
      state.user = { email, password }
    },
  },
})

export const { signUp } = authSlice.actions

export default authSlice.reducer
