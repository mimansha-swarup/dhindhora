import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { concatedApi, userApi } from "../../utils/api";

export const editUser = createAsyncThunk(
  "user/edit",
  async ({ userData, token }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.post(
        concatedApi(userApi, "edit"),
        { userData },
        { headers: { authorization: token } }
      );
      if (status === 201) return data.user;
    } catch (err) {
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);
