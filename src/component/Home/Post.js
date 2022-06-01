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
import { grey } from "@mui/material/colors";
import { HomePageStyles } from "../../styles/HomePageStyle";
import { getCurrentUser } from "../../utils";
import { followUser, unfollowUser } from "../../helper/user";
import { deletePost } from "../../helper/post";
import { CreatePostModal } from "./CreatePostModal";
import { setPostContent } from "../../features/post/postSlice";

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

  const { _id = "", content, username, updatedAt } = postInfo;

  const {
    auth: { userData, token },
    user: { users },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [localActions, setLocalActions] = useState({
    menuAnchorElement: null,
    isEditModalOpen: false,
  });

  const isMenuOpen = Boolean(localActions?.menuAnchorElement);

  const handleMenuClick = (event) => {
    setLocalActions((prev) => ({
      ...prev,
      menuAnchorElement: event.currentTarget,
    }));
  };
  const handleMenuClose = () => {
    setLocalActions((prev) => ({ ...prev, menuAnchorElement: null }));
  };

  const handleOpenEditPostModal = () =>{
    setLocalActions((prev) => ({
      ...prev,
      isEditModalOpen: true,
    }))
    dispatch(setPostContent(postInfo?.content))
    handleMenuClose()
  }

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
            anchorEl={localActions?.menuAnchorElement}
            open={isMenuOpen}
            onClose={handleMenuClose}
           
          >
            {username === userData?.username ? (
              <div>
                <MenuItem
                onClick={handleOpenEditPostModal}
                >Edit</MenuItem>
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
      <Divider sx={PostDividerStyle} />
      <Container>
        <Typography
          my={2}
          variant="body1"
          component="p"
          textAlign="start"
          color={"grey[200]"}
        >
          {content}
        </Typography>
      </Container>
      <Divider sx={PostDividerStyle} />
      <Stack flexDirection="row" justifyContent="stretch" p={1} gap={3}>
        <Button sx={PostActionButtonStyles}>
          {" "}
          <ThumbUpAlt /> Like
        </Button>
        <Button sx={PostActionButtonStyles}>
          {" "}
          <ModeComment /> Comment
        </Button>
        <Button sx={PostActionButtonStyles}>
          {" "}
          <Bookmark /> Save
        </Button>
      </Stack>
    </Paper>
  );
};
