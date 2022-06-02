import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { commentApi, concatedApi } from "../../utils/api";

export const addComment = createAsyncThunk(
  "post/addComment",
  async ({ postId, commentData, token }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.post(
        concatedApi(commentApi, "add", postId),
        { commentData },
        { headers: { authorization: token } }
      );
    
      if (status === 201) return data.posts;
    } catch (err) {
      return err.response.data.errors[0];
    }
  }
);
