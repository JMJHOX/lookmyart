import { useLazyQuery } from "@apollo/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { GET_SESSION } from "../../../queries/profile/getprofile";

export interface userInfo {
  auth: boolean;
  username: string;
  uuid: number;
}

const initialState: userInfo = {
  auth: Cookies.get("accessToken") ? true : false,
  username: "",
  uuid: 0,
};

export const UserAuth = createSlice({
  name: "userChanger",
  initialState,
  reducers: {
    ChangeAuth: (state, action: PayloadAction<boolean>) => {
      state.auth = action.payload;
    },
    ChangeUUID: (state, action: PayloadAction<number>) => {
      state.uuid = action.payload;
    },
    ChangeUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { ChangeAuth, ChangeUUID, ChangeUsername } = UserAuth.actions;

export default UserAuth.reducer;
