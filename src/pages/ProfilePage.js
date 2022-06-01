import { Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { HomeLayout, Post, ProfileHeader } from "../component";
import { useEffect, useState } from "react";
import { getCurrentUser } from "../utils";

export const aLinkStyle = makeStyles({ color: blue[50] });

export const ProfilePage = () => {
  const { username } = useParams();
  const {
    auth: { userData },
    user: { users },
    post: { allPosts },
  } = useSelector((state) => state);

  const [currUser, setCurrUser] = useState({ followers: [], following: [] });

  useEffect(() => {
    setCurrUser(getCurrentUser(users, username));
  }, [username, users]);

  const isUserHasPost = () =>
    allPosts.filter((eachPost) => eachPost?.username === username).length >= 1
      ? true
      : false;
  const usersPost = allPosts.filter(
    (eachPost) => eachPost.username === username
  ).reverse();
  return (
    <HomeLayout>
      <ProfileHeader currUser={currUser} />

      <Typography textAlign="start" my={2} variant="h6" component={"h6"}>
        {`${
          currUser?.username === userData?.username
            ? "Your"
            : `${currUser?.username}'s`
        } Posts`}
      </Typography>
      {isUserHasPost() ? (
        usersPost.map(
          (eachPost) =>
             (
              <Post key={eachPost._id} postInfo={eachPost} />
            )
        )
      ) : (
        <Typography textAlign="center" variant="subtitle1" component={"p"}>
          No Post Yet
        </Typography>
      )}
    </HomeLayout>
  );
};
