import { createSlice } from "@reduxjs/toolkit";
import { loginHandler, signUpHandler } from "../../helper/auth";

const localData = localStorage.getItem("dhindhora_data");

const initialState = {
  token: localData?.token || "",
  userData: localData?.userData || {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOutHandler: (state) => {
      localStorage.removeItem("dhindhora_data");
      state.token = "";
      state.userData = {};
    },
  },
  extraReducers: {
    [loginHandler.pending]: (state, { payload }) => {
      //  willl handle  pending and full fillled later 
      // ignore console.log
      console.log("loading")
      
    },
    [loginHandler.fulfilled]: (state, { payload }) => {
      console.log("fulfilled")
      state.token = payload.encodedToken;
      state.userData = payload.foundUser;
    },
    [loginHandler.rejected]: (state, { payload }) => {
      //  willl handle  pending and full fillled later
      console.log(payload)
      
    },
    [signUpHandler.fulfilled]: (state, { payload }) => {
      state.token = payload.encodedToken;
      state.userData = payload.createdUser;
    },
  },
});

export const { signOutHandler } = authSlice.actions;
export default authSlice.reducer
