import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modal: null,
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'card',
  initialState: initialState,
  reducers: {
    getModal: (state, action) => {
      state.modal = action.payload;
    },
    isModalOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { getModal, isModalOpen } = modalSlice.actions;

export default modalSlice.reducer;