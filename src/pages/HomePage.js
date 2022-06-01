import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddPost, HomeLayout, Post } from "../component";
import { getAllPosts } from "../helper/post";
import { HomePageStyles } from "../styles/HomePageStyle";
import { getCurrentUser } from "../utils";

export const HomePage = () => {
  const { SortDividerStyle, SortLabelStyle, SortSelcetStyle } = HomePageStyles;
  const {
    auth: { token, userData },
    post: { allPosts },
    user:{users}
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) dispatch(getAllPosts());
  }, [dispatch, token]);

  const userFeeds = allPosts.filter((post) => {
    return (
      post.username === userData.username ||
      getCurrentUser(users,post?.username)?.followers?.find(
        (user) => user.username === userData.username
      )
    );
  });

  return (
    <HomeLayout>
      <Typography variant="h6" textAlign="start" mb={2} component="h6">
        Home
      </Typography>
      <AddPost />
      <Stack
        my={2}
        gap={1}
        justifyContent="space-around"
        flexDirection="row"
        alignItems="center"
      >
        <Divider sx={SortDividerStyle} textAlign="right">
          <Stack flexDirection="row">
            <InputLabel sx={SortLabelStyle}>sort by</InputLabel>
            <FormControl size="small">
              <Select
                value="top"
                disableUnderline
                sx={SortSelcetStyle}
                variant="standard"
              >
                <MenuItem value="top">Top</MenuItem>
                <MenuItem value="recent">Recent</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Divider>
      </Stack>
      {userFeeds.map((eachPost) => (
        <Post key={eachPost._id} postInfo={eachPost} />
      ))}
    </HomeLayout>
  );
};
