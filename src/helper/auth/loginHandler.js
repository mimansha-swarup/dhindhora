import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { loginRoute } from "../../utils/routeConstant";

export const loginHandler = createAsyncThunk(
  "auth/login",

  async ({ username, password }, { rejectWithValue }) => {
    try {
      console.log("data")
      const { status, data } = await axios.post(loginRoute, {
        username,
        password,
      });
      // const { status, data } = await axios.post("/api/auth/login", { username, password });
      console.log("data",data)

      if (status === 200)
        localStorage.setItem(
          "dhindhora_data",
          JSON.stringify({ token: data.encodedToken, userData: data.foundUser })
        );
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);
