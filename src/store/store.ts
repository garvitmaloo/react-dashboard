/* eslint-disable import/no-cycle */
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import snackbarReducer from "./snackbarSlice";

const store = configureStore({
  reducer: { user: userReducer, snackbar: snackbarReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
