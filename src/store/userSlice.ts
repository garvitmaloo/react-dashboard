/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { createSlice } from "@reduxjs/toolkit";

import { User } from "../types/prop_types";

const existingUser = localStorage.getItem("loggedInUserData");
const parsedUserData = existingUser && JSON.parse(existingUser);
const initialState: User | null = parsedUserData && {
  ...parsedUserData,
  role: parsedUserData.email === "admin@shop.com" ? "Admin" : "Subadmin"
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state: any, action) {
      state = action.payload;
    }
  }
});

export const selectUserState = (state: any) => state.user;
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
