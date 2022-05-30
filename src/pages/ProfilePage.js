import { Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
import {  useSelector } from "react-redux";

import { HomeLayout, Post, ProfileHeader } from "../component";
import { useEffect, useState } from "react";
import { getCurrentUser } from "../utils";


export const aLinkStyle = makeStyles({ color: blue[50] });

export const ProfilePage = () => {
  const { username } = useParams();
  const {
    user: { users },
  } = useSelector((state) => state);

  const [currUser, setCurrUser] = useState({ followers: [], following: [] });
  
  useEffect(() => {
    
    setCurrUser(getCurrentUser(users,username));
    
  }, [username, users]);

  return (
    <HomeLayout>
     
      <ProfileHeader currUser={currUser} />

      <Typography textAlign="start" my={2} variant="h6" component={"h6"}>
        Your Posts
      </Typography>
      {[...Array(3)].map((el) => (
        <Post key={el} />
      ))}
    </HomeLayout>
  );
};
