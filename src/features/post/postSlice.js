import { createSlice } from "@reduxjs/toolkit";
import { deletePost, editPost, getAllPosts, sendPost } from "../../helper/post";

const initialState = {
  allPosts: [],
  postContent:"",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers:{
    setPostContent:(state,{payload})=>{
      state.postContent = payload
    },
    clearPostContent:(state,{payload})=>{
      state.postContent = ""

    }
  },
  extraReducers: {
    [getAllPosts.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
    },
    [deletePost.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
    },
    [sendPost.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
    },
    [editPost.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
    },
  },
});

export const {setPostContent,clearPostContent} = postSlice.actions

export default postSlice.reducer;
