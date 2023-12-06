import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/api/apiSlice';
import authReducer from './features/auth/authSlice';
import cardReducer from './features/card/cardSlice';
import reviewReducer from './features/reviews/reviewSlice';
import modalReducer from '../src/features/modal/modalSlice';
import usersReducer from '../src/features/users/usersSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    card: cardReducer,
    reviews: reviewReducer,
    modal: modalReducer,
    users: usersReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
