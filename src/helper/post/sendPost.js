import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { postApi } from "../../utils/api";

export const sendPost = createAsyncThunk(
  "post/sendPost",
  async ({ postData, token }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.post(
        postApi,
        { postData },
        { headers: { authorization: token } }
      );
      console.log(data)
      if (status === 201) return data.posts;
    } catch (err) {
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);
