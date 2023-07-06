/* eslint-disable import/no-cycle */
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import snackbarReducer from "./snackbarSlice";
import themeReducers from "./themeSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    snackbar: snackbarReducer,
    theme: themeReducers
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
