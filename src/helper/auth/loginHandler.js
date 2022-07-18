import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { loginApi } from "../../utils/api";


export const loginHandler = createAsyncThunk(
  "auth/login",

  async ({ username, password }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.post(loginApi, {
        username,
        password,
      });

      if (status === 200)
        localStorage.setItem(
          "dhindhora_data",
          JSON.stringify({ token: data.encodedToken, userData: data.foundUser })
        );
        
        toast(`👋 Welcome Back, ${username}!`);
        return data;
      } catch (err) {
      toast.error(err.response.data.errors[0]);
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);
