/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

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
    setUser(state: any, action: PayloadAction<User>) {
      state = action.payload;
    }
  }
});

export const selectUserState = (state: any) => state.user;
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
