import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { concatedApi, userApi } from "../../utils/api";

export const unsavePost = createAsyncThunk(
  "bookmark/unsavePost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.post(
        concatedApi(userApi, "remove-bookmark", postId),
        {},
        {
          headers: { authorization: token },
        }
      );
      if (status === 200) return data.bookmarks;
    } catch (err) {
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);
