import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

import { signUpApi } from "../../utils/api";

export const signUpHandler = createAsyncThunk(
  "auth/signup",
  async ({ firstName, lastName, username, password }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.post(signUpApi, {
        firstName,
        lastName,
        username,
        password,
      });
      if (status === 200)
        localStorage.setItem(
          "dhindhora_data",
          JSON.stringify({ token: data.encodedToken, userData: data.foundUser })
        );
        toast(`👋 Welcome , ${username}!`);
      return data;
    } catch (err) {
      toast.error(err.response.data.errors[0]);
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);
