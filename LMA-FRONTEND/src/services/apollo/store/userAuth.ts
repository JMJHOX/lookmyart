import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface sessionInfo {
  username: string;
  email: string;
  profile_url: string;
  background_url: string;
  search: string;
  uuid: number;
}
export interface userInfo {
  auth: boolean;
  sessionUser: sessionInfo;
}

const initialState: userInfo = {
  auth: Cookies.get("accessToken") ? true : false,
  sessionUser: {
    username: "",
    email: "",
    profile_url: "",
    background_url:"",
    search: "",
    uuid: 0,
  },
};

export const UserAuth = createSlice({
  name: "userChanger",
  initialState,
  reducers: {
    ChangeAuth: (state, action: PayloadAction<boolean>) => {
      state.auth = action.payload;
    },
    ChangeProfile: (state, action: PayloadAction<string>) => {
      state.sessionUser.profile_url = action.payload;
    },
    ChangeBackground: (state, action: PayloadAction<string>) => {
      state.sessionUser.background_url = action.payload;
    },
    ChangeSearch: (state, action: PayloadAction<string>) => {
      state.sessionUser.search = action.payload;
    },
    ChangeEmail: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.sessionUser.email = action.payload;
    },
    ChangeUUID: (state, action: PayloadAction<number>) => {
      state.sessionUser.uuid = action.payload;
    },
    ChangeUsername: (state, action: PayloadAction<string>) => {
      state.sessionUser.username = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  ChangeAuth,
  ChangeUUID,
  ChangeProfile,
  ChangeBackground,
  ChangeUsername,
  ChangeSearch,
  ChangeEmail,
} = UserAuth.actions;

export default UserAuth.reducer;
