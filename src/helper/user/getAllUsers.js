import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { userApi } from "../../utils/api";

export const getAllUsers = createAsyncThunk(
  "user/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.get(userApi);
      if (status === 200) {
        return data.users;
      }
    } catch (err) {
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);
