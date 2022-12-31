import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export interface userInfo {
  auth: boolean;
  username: string;
  uuid: string;
}

const initialState: userInfo = {
  auth: Cookies.get("accessToken") ? true : false,
  username: "",
  uuid: "",
};

export const UserAuth = createSlice({
  name: "userChanger",
  initialState,
  reducers: {
    ChangeAuth: (state, action: PayloadAction<boolean>) => {
      state.auth = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { ChangeAuth } = UserAuth.actions;

export default UserAuth.reducer;
