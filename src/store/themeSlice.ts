/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "Theme",
  reducers: {
    toggleTheme(state) {
      state.appTheme = state.appTheme === "light" ? "dark" : "light";
    }
  },
  initialState: { appTheme: "light" }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
