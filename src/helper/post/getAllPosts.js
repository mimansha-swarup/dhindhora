import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { postApi } from "../../utils/api";

export const getAllPosts = createAsyncThunk(
  "post/allposts",
  async (_, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.get(postApi);
      if (status === 200) return data.posts;
    } catch (err) {
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);
