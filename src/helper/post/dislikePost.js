import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { concatedApi, postApi } from "../../utils/api";

export const dislikePost = createAsyncThunk(
  "post/dislikePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.post(
        concatedApi(postApi, "dislike", postId),
        {},
        { headers: { authorization: token } }
      );
      if (status === 201) return data.posts;
    } catch (err) {
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);
