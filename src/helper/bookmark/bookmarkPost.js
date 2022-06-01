import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { concatedApi, userApi } from "../../utils/api";

export const bookmarkPost = createAsyncThunk(
  "bookmark/bookmarkPost",
  async ({ postId, token }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.post(
        concatedApi(userApi, "bookmark", postId),
        {},
        {
          headers: { authorization: token },
        }
        );
        console.log("work",status,data)
      if (status === 200) return data.bookmarks;
    } catch (err) {
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);
