import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface sessionInfo {
  username: string;
  email: string;
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
    ChangeSearch: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
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
  ChangeUsername,
  ChangeSearch,
  ChangeEmail,
} = UserAuth.actions;

export default UserAuth.reducer;
