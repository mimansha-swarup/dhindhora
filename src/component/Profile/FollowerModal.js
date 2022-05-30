import {
  Modal,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
  Avatar,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginStyles } from "../../styles/Loginstyle";
import { followUser, unfollowUser } from "../../helper/user";
import { getCurrentUser } from "../../utils";
import { Link } from "react-router-dom";

export const FollowerModal = ({ username, open, onClose }) => {
  const { signUpModalStyle } = LoginStyles;

  const {
    auth: { userData, token },
    user: { users },
  } = useSelector((state) => state);

  const currUser = getCurrentUser(users, username);

  const dispatch = useDispatch();

  const handleFollowUser = (followerId) =>
    dispatch(followUser({ followerId, token }));

  const handleUnfollowUser = (unfollowerId) =>
    dispatch(unfollowUser({ unfollowerId, token }));

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={signUpModalStyle}>
        <Typography textAlign="center" variant="h6" mb={1} component="h6">
          Followers
        </Typography>
        <Divider />
        <List>
          {currUser?.followers.length >= 1 ? (
            currUser?.followers.map((user) => (
              <ListItem key={user._id} sx={{ mx: "auto" }}>
                <Link
                  onClick={onClose}
                  style={{ display: "flex" }}
                  to={`/profile/${user.username}`}
                >
                  <ListItemAvatar>
                    <Avatar src={user.profilePicture} alt="dp" />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${user.firstName} ${user.lastName}`}
                    secondary={`@${user.username}`}
                  />
                </Link>

                {user?._id === userData?._id ? (
                  <></>
                ) : currUser?.following.find(
                    (eachUser) => eachUser?.username === user?.username
                  ) ? (
                  <Button
                    onClick={() => handleUnfollowUser(user._id)}
                    variant="outlined"
                    size="small"
                    sx={{ ml: "auto" }}
                  >
                    Unfollow
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleFollowUser(user._id)}
                    variant="contained"
                    size="small"
                    sx={{ ml: "auto" }}
                  >
                    Follow
                  </Button>
                )}
              </ListItem>
            ))
          ) : (
            <Typography
              textAlign="center"
              variant="overline"
              mt={2}
              component="p"
            >
              No one has Followed yet
            </Typography>
          )}
        </List>
      </Box>
    </Modal>
  );
};
