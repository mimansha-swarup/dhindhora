import { configureStore } from "@reduxjs/toolkit";
import {
  authReducer,
  bookmarkReducer,
  postReducer,
  userReducer,
} from "../features";

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    post: postReducer,
    bookmark: bookmarkReducer,
  },
});
