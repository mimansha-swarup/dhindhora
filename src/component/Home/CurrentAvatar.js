import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../utils";

export const CurrentAvatar = ({ sx = {} }) => {
  const {
    auth: { userData },
    user: { users },
  } = useSelector((state) => state);
  let currUser = getCurrentUser(users, userData.username);
  currUser = currUser? currUser : userData
  
  return <Avatar src={currUser.profilePicture} alt="ProfilePicture" sx={sx} />;
};

