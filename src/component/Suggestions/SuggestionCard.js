import {
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
// import { useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { followUser } from "../../helper/user";
import { SuggestionCardStyles } from "../../styles/SuggestionCardStyles";

export const SuggestionCard = ({ sx = {}, isSmall = false }) => {
  const { SuggestionContainerStyle, ListStyle, ListTileStyle } =
    SuggestionCardStyles;
  const {
    user,
    auth: { userData, token },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleFollowUser = (followerId) =>
    dispatch(followUser({ followerId, token }));
  const suggestionList = user.users
    .filter(
      (currUser) =>
        currUser.username !== userData.username &&
        !currUser.followers.find(
          (followedUser) => followedUser.username === userData.username
        )
    )
    .slice(0, 5);
  let style = SuggestionContainerStyle;
  if (isSmall) style = sx;
  return (
    <Box sx={{...style,position:"sticky",top:"7rem"}}>
      <Typography
        variant="subtitle1"
        textAlign="start"
        component="p"
        fontWeight="bold"
      >
        Suggestions
      </Typography>
      <List sx={ListStyle}>
        {suggestionList.map(
          ({ _id, username, firstName, lastName, profilePicture }) => (
            <ListItem key={_id} sx={ListTileStyle}>
              <Link
                style={{ width: "100%", display: "flex" }}
                to={`/profile/${username}`}
              >
                <ListItemAvatar sx={{ display: "flex" }}>
                  <Avatar
                    alt={firstName}
                    sx={{ my: "auto" }}
                    src={profilePicture}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={`${firstName} ${lastName}`}
                  secondary={`@${username}`}
                ></ListItemText>
              </Link>
              <Button
                variant="contained"
                onClick={() => handleFollowUser(_id)}
                sx={{ ml: "auto" }}
                size="small"
              >
                Follow
              </Button>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );
};
