/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

const initialState = {
  isOpen: false,
  message: ""
};

const snackbarSlice = createSlice({
  name: "Snackbar",
  reducers: {
    setSnackbarOpen(
      state,
      action: PayloadAction<{ isOpen: boolean; message: string }>
    ) {
      state.isOpen = action.payload.isOpen;
      state.message = action.payload.message;
    }
  },
  initialState
});

export const { setSnackbarOpen } = snackbarSlice.actions;
export default snackbarSlice.reducer;
