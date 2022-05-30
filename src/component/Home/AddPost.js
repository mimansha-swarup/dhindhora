import { Button, Paper, Stack, TextField } from "@mui/material";
import React from "react";
import { HomePageStyles } from "../../styles/HomePageStyle";
import { CurrentAvatar } from "./CurrentAvatar";

export const AddPost = () => {
  const { AddPostContainerStyle, AddPostInputStyle } = HomePageStyles;
  return (
    <Paper sx={AddPostContainerStyle}>
      <Stack flexDirection="row" gap={3} alignItems="center">
        <CurrentAvatar />
        <TextField
          multiline
          hiddenLabel
          InputProps={{ disableUnderline: true }}
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
