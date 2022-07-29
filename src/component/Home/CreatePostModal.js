import {
  Button,
  Divider,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { CurrentAvatar } from "./CurrentAvatar";
import { LoginStyles } from "../../styles/Loginstyle";
import {
  clearPostContent,
  setPostContent,
} from "../../features/post/postSlice";
import { editPost, sendPost } from "../../helper/post";

export const CreatePostModal = ({
  isOpen,
  handleClose,
  isEdit = false,
  currentPost,
}) => {
  const { signUpModalStyle } = LoginStyles;

  const {
    auth: { userData, token },
    post: { postContent },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isEdit) dispatch(setPostContent(currentPost?.content));
  }, [currentPost?.content, dispatch, isEdit]);

  const createSendPost = () => {
    if (postContent) {
      if (isEdit)
        dispatch(
          editPost({
            postData: { content: postContent },
            token,
            postId: currentPost?._id,
          })
        );
      else dispatch(sendPost({ postData: { content: postContent }, token }));

      dispatch(clearPostContent());
      handleClose();
    }
  };

  const closeModal = () => {
    if (isEdit) {
      dispatch(clearPostContent());
    }
    handleClose();
  };
  return (
    <Modal open={isOpen} onClose={closeModal}>
      <Stack sx={signUpModalStyle} flexDirection="column" gap={1}>
        <Typography variant="h6" component="h6" textAlign="center">
          {isEdit ? "Update " : "Create "}
          Post
        </Typography>
        <Divider />
        <Stack flexDirection="row" gap={2} alignItems="center">
          <CurrentAvatar />
          <Typography variant="subtitle1" component="p">
            {userData?.username}
          </Typography>
        </Stack>
        <TextField
          multiline
          hiddenLabel
          InputProps={{ disableUnderline: true, autoFocus: true }}
          rows={5}
          id="addPost"
          placeholder="What's on your Mind?"
          variant="filled"
          onChange={(e) => dispatch(setPostContent(e.target.value))}
          value={postContent}
        />
        <Button onClick={createSendPost} sx={{ mt: 3 }} variant="contained">
          Post
        </Button>
      </Stack>
    </Modal>
  );
};
