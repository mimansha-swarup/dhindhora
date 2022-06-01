import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { concatedApi, postApi } from "../../utils/api";

export const editPost = createAsyncThunk(
  "post/editPost",
  async ({ postData,token,postId }, { rejectWithValue }) => {
    try {
      const { status, data } = await axios.post(
        concatedApi(postApi,"edit",postId),{postData},{headers:{ authorization: token }}
      )

      if(status ===201) return data.posts
    } catch (err) {
      return rejectWithValue(err.response.adata.errors[0]);
    }
  }
);
