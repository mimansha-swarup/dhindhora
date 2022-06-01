import { createSlice } from "@reduxjs/toolkit";
import { bookmarkPost, unsavePost } from "../../helper";

const initialState = {
  bookmarkedPost: [],
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  extraReducers: {
    [bookmarkPost.fulfilled]: (state,{payload})=>{
      state.bookmarkedPost = payload
    },
    [unsavePost.fulfilled]: (state,{payload})=>{
      state.bookmarkedPost = payload
    }
  },
});

export default bookmarkSlice.reducer;
