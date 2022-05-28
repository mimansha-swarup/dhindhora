import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { signUpRoute } from "../../utils/routeConstant";

export const signUpHandler = createAsyncThunk(
  "auth/signup",
  async ({ firstName, lastName, username, password }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.post(signUpRoute, {
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
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.errors[0]);
    }
  }
);
