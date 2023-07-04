/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { createSlice } from "@reduxjs/toolkit";

export interface User {
  displayName: string;
  expiresIn: string;
  email: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
  registered: boolean;
  role: string;
}

const existingUser = localStorage.getItem("loggedInUserData");
const initialState: User | null = existingUser && JSON.parse(existingUser);

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
