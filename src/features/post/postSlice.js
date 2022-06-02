import { createSlice } from "@reduxjs/toolkit";
import {
  addComment,
  deletePost,
  dislikePost,
  editPost,
  getAllPosts,
  editComment,
  likePost,
  sendPost,
  deleteComment,
} from "../../helper";

const initialState = {
  allPosts: [],
  postContent: "",
  editCommentId:""
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPostContent: (state, { payload }) => {
      state.postContent = payload;
    },
    clearPostContent: (state, { payload }) => {
      state.postContent = "";
    },
    setEditComment: (state, { payload }) => {
      state.editCommentId = payload;
    },
    resetEditComment: (state, { payload }) => {
      state.editCommentId = "";
    },
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
    [likePost.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
    },
    [dislikePost.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
    },
    [addComment.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
    },
    [editComment.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
    },
    [deleteComment.fulfilled]: (state, { payload }) => {
      state.allPosts = payload;
    },

  },
});

export const { setPostContent, clearPostContent , setEditComment,resetEditComment} = postSlice.actions;

export default postSlice.reducer;
