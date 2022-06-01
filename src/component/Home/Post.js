import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  Bookmark,
  ModeComment,
  MoreHoriz,
  ThumbUpAlt,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Divider,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Typography,
  Box,
  Container,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";

import { HomePageStyles } from "../../styles/HomePageStyle";
import { getCurrentUser } from "../../utils";
import { CreatePostModal } from "./CreatePostModal";
import { setPostContent } from "../../features/post/postSlice";
import { followUser, unfollowUser , deletePost, dislikePost, likePost , unsavePost, bookmarkPost } from "../../helper";

export const Post = ({
  postInfo = {
    content: "lorem is",
    username: "slayer",
    updatedAt: "22-01-2002",
  },
}) => {
  const {
    PostContainerStyle,
    PostActionButtonStyles,
    UserNameStyle,
    PostDividerStyle,
  } = HomePageStyles;

  const {
    _id = "",
    content,
    username,
    updatedAt,
    likes: { likedBy, likeCount },
  } = postInfo;

  const {
    auth: { userData, token },
    user: { users },
    bookmark: { bookmarkedPost },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [localActions, setLocalActions] = useState({
    isEditModalOpen: false,
  });
  const [menuAnchorElement, setMenuAnchorElement] = useState(null);

  const isMenuOpen = Boolean(menuAnchorElement);

  const handleMenuClick = (event) => setMenuAnchorElement(event.currentTarget);

  const handleMenuClose = () => setMenuAnchorElement(null);

  const handleOpenEditPostModal = () => {
    setLocalActions((prev) => ({
      ...prev,
      isEditModalOpen: true,
    }));
    dispatch(setPostContent(postInfo?.content));
    handleMenuClose();
  };

  const IsLiked = () =>
    likedBy.find(
      (userWhoLiked) => userWhoLiked?.userName === userData?.userName
    );
  const isBookmarked = () =>
    bookmarkedPost.find((bookmarkedId) => bookmarkedId === _id);

  const handleLikeDislike = () =>
    IsLiked()
      ? dispatch(dislikePost({ postId: _id, token }))
      : dispatch(likePost({ postId: _id, token }));

console.log(bookmarkedPost)

  const handleBookmarkingOfPost = () =>
    isBookmarked()
      ? dispatch(unsavePost({ postId: _id, token }))
      : dispatch(bookmarkPost({ postId: _id, token }));

  const postUser = getCurrentUser(users, username);

  const profilePicture = postUser?.profilePicture; //info of the one who posted
  const postUserid = postUser?._id; //info of the one who posted
  const following = getCurrentUser(users, userData?.username)?.following; //info of logged in user

  return (
    <Paper sx={PostContainerStyle}>
      <Stack flexDirection="row" p={2} gap={3} alignItems="center">
        <Link to={`/profile/${username}`}>
          <Avatar alt="profile-pic" src={profilePicture} />
        </Link>
        <Stack alignItems="start">
          <Typography sx={UserNameStyle} variant="subtitle1" component="p">
            {username}
          </Typography>
          <Typography variant="caption" component="p" color={grey[500]}>
            {moment(updatedAt).fromNow()}
          </Typography>
        </Stack>
        <Box sx={{ color: isMenuOpen ? grey[700] : grey[400], ml: "auto" }}>
          <MoreHoriz onClick={handleMenuClick} />
          <CreatePostModal
            isOpen={localActions?.isEditModalOpen}
            handleClose={() =>
              setLocalActions((prev) => ({
                ...prev,
                isEditModalOpen: !prev?.isEditModalOpen,
              }))
            }
            isEdit={localActions?.isEditModalOpen}
            currentPost={postInfo}
          />
          <Menu
            anchorEl={menuAnchorElement}
            open={isMenuOpen}
            onClose={handleMenuClose}
          >
            {username === userData?.username ? (
              <div>
                <MenuItem onClick={handleOpenEditPostModal}>Edit</MenuItem>
                <MenuItem
                  onClick={() => dispatch(deletePost({ postId: _id, token }))}
                >
                  Delete
                </MenuItem>
              </div>
            ) : following.find(
                (eachUser) => eachUser?.username === username
              ) ? (
              <MenuItem
                onClick={() =>
                  dispatch(unfollowUser({ unfollowerId: postUserid, token }))
                }
              >
                Unfollow
              </MenuItem>
            ) : (
              <MenuItem
                onClick={() =>
                  dispatch(followUser({ followerId: postUserid, token }))
                }
              >
                Follow
              </MenuItem>
            )}
          </Menu>
        </Box>
      </Stack>
      {/* <Divider sx={PostDividerStyle} /> */}
      <Container>
        <Typography
          mb={3}
          variant="body1"
          component="p"
          textAlign="start"
          color={grey[700]}
        >
          {content}
        </Typography>
      </Container>
      <Divider sx={PostDividerStyle} />
      <Stack flexDirection="row" justifyContent="stretch" p={1} gap={3}>
        <Button
          onClick={handleLikeDislike}
          sx={{
            ...PostActionButtonStyles,
            color: IsLiked() ? blue[600] : grey[600],
          }}
        >
          {" "}
          <ThumbUpAlt /> {likeCount >= 1 ? likeCount : "Like"}
        </Button>
        <Button sx={PostActionButtonStyles}>
          {" "}
          <ModeComment /> Comment
        </Button>
        <Button
          onClick={handleBookmarkingOfPost}
          sx={{
            ...PostActionButtonStyles,
            color: isBookmarked() ? blue[600] : grey[600],
          }}
        >
          {" "}
          <Bookmark /> Save
        </Button>
      </Stack>
    </Paper>
  );
};
