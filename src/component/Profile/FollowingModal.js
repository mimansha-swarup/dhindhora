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
import { unfollowUser } from "../../helper/user";
import { getCurrentUser } from "../../utils";
import { Link } from "react-router-dom";

export const FollowingModal = ({ username, open, handleClose }) => {
  const { signUpModalStyle } = LoginStyles;

  const {
    auth: { token, userData },
    user: { users },
  } = useSelector((state) => state);

  const currUser = getCurrentUser(users, username);

  const dispatch = useDispatch();

  const handleUnfollowUser = (unfollowerId) =>
    dispatch(unfollowUser({ unfollowerId, token }));

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={signUpModalStyle}>
        <Typography textAlign="center" variant="h6" mb={1} component="h6">
          Following
        </Typography>

        <Divider />
        <List>
          {currUser?.following.length >= 1 ? (
            currUser?.following.map((user) => (
              <ListItem key={user._id} sx={{ mx: "auto" }}>
                <Link
                  onClick={handleClose}
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
                {user._id !== userData._id && (
                 
                    <Button onClick={() => handleUnfollowUser(user._id)} variant="outlined" size="small" sx={{ ml: "auto" }}>
                      Unfollow
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
              Not Following Anyone
            </Typography>
          )}
        </List>
      </Box>
    </Modal>
  );
};
