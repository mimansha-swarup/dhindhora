import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { commentApi, concatedApi } from "../../utils/api";

export const editComment = createAsyncThunk(
  "post/editComment",
  async ({ postId, commentData,commentId, token }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.post(
        concatedApi(commentApi, "edit", postId,commentId),
        { commentData },
        { headers: { authorization: token } }
      );
      if (status === 201) return data.posts;
    } catch (err) {
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);
