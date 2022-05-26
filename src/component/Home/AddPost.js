import { Avatar, Button, Paper, Stack, TextField } from "@mui/material";
import React from "react";
import { HomePageStyles } from "../../styles/HomePageStyle";


export const AddPost = () => {
  const { AddPostContainerStyle, AddPostInputStyle } = HomePageStyles;
  return (
    <Paper sx={AddPostContainerStyle}>
      <Stack flexDirection="row" gap={3} alignItems="center">
        <Avatar
          alt="profile-pic"
          src="https://bestcellphonespyapps.com/wp-content/uploads/2017/09/pexels-photo-220453-1-1001x1024.jpeg"
        />
        <TextField
          multiline
          hiddenLabel
          rows={2}
          sx={AddPostInputStyle}
          id="addPost"
          placeholder="What's on your Mind?"
          variant="filled"
        />
      </Stack>

      <Stack flexDirection="row" mt={1} justifyContent="flex-end">
        <Button variant="contained" size="small">
          Post
        </Button>
      </Stack>
    </Paper>
  );
};
