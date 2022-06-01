import { Button, Paper, Stack, TextField } from "@mui/material";
import React, {  useEffect, useState } from "react";
import { HomePageStyles } from "../../styles/HomePageStyle";
import { CurrentAvatar } from "./CurrentAvatar";
import { CreatePostModal } from "./CreatePostModal";
import { useDispatch, useSelector } from "react-redux";
import { sendPost } from "../../helper/post";
import { clearPostContent } from "../../features/post/postSlice";

export const AddPost = () => {
  const { AddPostContainerStyle, AddPostInputStyle } = HomePageStyles;

  const [localActions, setLocalActions] = useState({
    isDisabled: true,
    isCreatePostModalOpen: false,
  });
  const {
    auth:{token},
    post: { postContent },
  } = useSelector((state) => state);
  const dispatch = useDispatch()

  useEffect(()=>{
    if(postContent)
    setLocalActions(prev=>({...prev,isDisabled:false}))
    else
    setLocalActions(prev=>({...prev,isDisabled:true}))
  },[postContent])
  

  const createSendPost = () => {
    dispatch(sendPost({ postData: { content: postContent }, token }));
    dispatch(clearPostContent());
  };

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
          value={postContent}
          onClick={() =>
            setLocalActions((prev) => ({
              ...prev,
              isCreatePostModalOpen: true,
            }))
          }
        />
      </Stack>
      <CreatePostModal
        isOpen={localActions?.isCreatePostModalOpen}
        handleClose={() =>
          setLocalActions((prev) => ({ ...prev, isCreatePostModalOpen: false }))
        }
      />

      <Stack flexDirection="row" mt={1} justifyContent="flex-end">
        <Button
          disabled={localActions?.isDisabled}
          variant="contained"
          size="small"
          onClick={createSendPost}
        >
          Post
        </Button>
      </Stack>
    </Paper>
  );
};
