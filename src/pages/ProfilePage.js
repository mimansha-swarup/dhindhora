import {
  Stack,
  Avatar,
  Typography,
  Button,
  Paper,
  Divider,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import React from "react";
import { HomeLayout, Post } from "../component";
export const aLinkStyle = makeStyles({ color: blue[50] });
export const ProfilePage = () => {
  return (
    <HomeLayout>
      <Paper sx={{ p: 2 }}>
        <Stack alignItems="center" gap={1}>
          <Avatar
            alt="profile-pic"
            src="https://bestcellphonespyapps.com/wp-content/uploads/2017/09/pexels-photo-220453-1-1001x1024.jpeg"
            sx={{ height: 156, width: 156 }}
          />
          <Typography fontWeight={500} variant="body1" component={"p"}>
            Monkesh Kumar
          </Typography>
          <Typography variant="body2" component={"p"} color={grey[600]}>
            @Monkeshxx
          </Typography>
          <Button variant="outlined" sx={{ borderRadius: 4 }} color="info">
            Edit Profile
          </Button>
          <Typography variant="subtitle1" component={"p"} color={grey[700]}>
            Monkesh the Monk | Not Influencer | Builder
          </Typography>
          <Typography variant="subtitle2" component={"p"} color={blue[300]}>
            <a href="http://website" target="_blank" rel="noopener noreferrer">
              {" "}
              www.monkeshtemonk.com{" "}
            </a>
          </Typography>
          <Stack b flexDirection="row" gap={2}>
            <Stack>
              Posts
              <span>{0}</span>
            </Stack>
            <Divider orientation="vertical" flexItem />
            <Stack>
              Followers
              <span>{0}</span>
            </Stack>
            <Divider orientation="vertical" flexItem />
            <Stack>
              Following
              <span>{0}</span>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
      <Typography textAlign="start" my={2} variant="h6" component={"h6"}>
        Your Posts
      </Typography>
      {[...Array(3)].map((el) => (
        <Post key={el} />
      ))}
    </HomeLayout>
  );
};
