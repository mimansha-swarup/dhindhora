import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { concatedApi, userApi } from "../../utils/api";

export const followUser = createAsyncThunk(
  "user/followUser",
  async ({ followerId, token }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.post(
        concatedApi(userApi,"follow",followerId),
        {},
        {
          headers: { authorization: token },
        }
      );

      if (status === 200) return data;
    } catch (err) {
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);
