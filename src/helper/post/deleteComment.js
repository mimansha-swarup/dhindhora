import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { commentApi, concatedApi } from "../../utils/api";

export const deleteComment = createAsyncThunk(
  "post/deleteComment",
  async ({ postId, commentId, token }, { rejectWithValue }) => {

    try {
      const { status, data } = await axios.post(
        concatedApi(commentApi, "delete", postId, commentId),{},
        { headers: { authorization: token } }
      );

      if (status === 201) return data.posts;
    } catch (err) {
      console.log(err)
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);
