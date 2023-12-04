/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  access: null,
  refresh: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = true;
    },
    setAccessToken: (state, action) => {
      state.access = action.payload;
    },
    setRefreshToken: (state, action) => {
      state.refresh = action.payload;
    },
    logUserOut: (state, action) => {
      state.user = null;
      state.access = null;
      state.refresh = null;
    },
  },
});

export const { setUser, setAccessToken, setRefreshToken, logUserOut } =
  authSlice.actions;

export default authSlice.reducer;
