import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddPost, HomeLayout, Post, SuggestionCard } from "../component";
import { getAllPosts } from "../helper/post";
import { HomePageStyles } from "../styles/HomePageStyle";
import { getCurrentUser } from "../utils";

export const HomePage = () => {
  const { SortDividerStyle, SortLabelStyle, SortSelcetStyle } = HomePageStyles;
  const {
    auth: { token, userData },
    post: { allPosts },
    user: { users },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) dispatch(getAllPosts());
  }, [dispatch, token]);

  const [sortOrder, setSortOrder] = useState("recent");

  const handleSelectMenuClick = (event) => setSortOrder(event.target.value);

  const userFeeds = allPosts.filter((post) => {
    return (
      post.username === userData.username ||
      getCurrentUser(users, post?.username)?.followers?.find(
        (user) => user.username === userData.username
      )
    );
  });

  const sortPost = () => {
    const feed = [...userFeeds]; // to make sure we dont mess orignal user feed
    if (sortOrder === "recent")
      feed.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt));
    if (sortOrder === "oldest")
      feed.sort((a, b) => new Date(a?.createdAt) - new Date(b?.createdAt));
    if (sortOrder === "top")
      feed.sort(
        (a, b) => new Date(b?.likes.likeCount) - new Date(a?.likes.likeCount)
      );
    return feed;
  };

  return (
    <HomeLayout>
      <Typography variant="h6" textAlign="start" mb={2} component="h6">
        Home
      </Typography>
      <AddPost />
      <Stack
        my={2}
        gap={2}
        justifyContent="space-around"
        flexDirection="row"
        alignItems="center"
      >
        <Divider sx={SortDividerStyle} textAlign="right">
          <Stack flexDirection="row">
            <InputLabel sx={SortLabelStyle}>sort by</InputLabel>
            <FormControl size="small">
              <Select
                value={sortOrder}
                disableUnderline
                sx={SortSelcetStyle}
                variant="standard"
                onChange={handleSelectMenuClick}
              >
                <MenuItem value="top">Top</MenuItem>
                <MenuItem value="recent">Recent</MenuItem>
                <MenuItem value="oldest">Oldest</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Divider>
      </Stack>
      {sortPost().length >= 1 ? (
        sortPost().map((eachPost) => (
          <Post key={eachPost._id} postInfo={eachPost} />
        ))
      ) : (
        <>
          <Typography variant="h4" component="h4" my={3}>
            You haven't Posted yet
          </Typography>
          <Typography variant="subtitle1" component="p">
            start Posting
          </Typography>
          <Box sx={{ display: {sm:"block",lg:"none"} ,width:{xs:"100%",sm:"80%"}, mx:"auto" }}>
            <SuggestionCard
            isSmall={true}
              sx={{
                p: 2,
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
              }}
            />
          </Box>
        </>
      )}
    </HomeLayout>
  );
};
