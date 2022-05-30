import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { concatedApi, userApi } from "../../utils/api";

export const unfollowUser = createAsyncThunk(
  "user/unfollow",
  async ({ unfollowerId, token }, { rejectWithValue }) => {
    try {
      
      const { status, data } = await axios.post(
        concatedApi(userApi, "unfollow", unfollowerId),
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (status === 200) return data;
    } catch (err) {
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);
