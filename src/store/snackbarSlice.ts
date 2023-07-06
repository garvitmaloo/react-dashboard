/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  message: ""
};

const snackbarSlice = createSlice({
  name: "Snackbar",
  reducers: {
    setSnackbarOpen(state, action) {
      state.isOpen = action.payload.isOpen;
      state.message = action.payload.message;
    }
  },
  initialState
});

export const { setSnackbarOpen } = snackbarSlice.actions;
export default snackbarSlice.reducer;
