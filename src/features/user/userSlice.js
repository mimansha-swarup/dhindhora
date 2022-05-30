import { createSlice } from "@reduxjs/toolkit";
import {
  editUser,
  followUser,
  getAllUsers,
  unfollowUser,
} from "../../helper/user";

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
 
    [getAllUsers.fulfilled]: (state, { payload }) => {
      state.users = payload;
    },

    [followUser.fulfilled]: (state, { payload }) => {
      state.users = state.users.map((user) => {
        if (user.username === payload.followUser.username)
          return payload.followUser;
        if (user.username === payload.user.username) return payload.user;
        return user;
      });
    },
    [unfollowUser.pending]: (state, { payload }) => {
      console.log("pending",payload)
      
    },
    [unfollowUser.reject]: (state, { payload }) => {
      console.log("reject",payload)
      
    },
    [unfollowUser.fulfilled]: (state, { payload }) => {
      state.users = state.users.map((user) => {
        if (user.username === payload.followUser.username)
          return payload.followUser;
        if (user.username === payload.user.username) return payload.user;
        return user;
      });
    },
    [editUser.fulfilled]: (state, { payload }) => {
      state.users = state.users.map((user) =>
        user.username === payload.username ? payload : user
      );
    },
  },
});

export default userSlice.reducer;