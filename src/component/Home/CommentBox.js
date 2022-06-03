import { grey } from "@mui/material/colors";
import { Stack, TextField, Typography, Box } from "@mui/material";
import { CurrentAvatar } from "./CurrentAvatar";
import { useDispatch, useSelector } from "react-redux";
import { addComment, editComment } from "../../helper";
import { resetEditComment } from "../../features/post/postSlice";
import { useEffect, useState } from "react";

export const CommentBox = ({ isEdit = false, commentData, postId}) => {
  const commentFieldStyle = {
    ".MuiInputBase-input": {
      padding: ".5rem 1rem",
      background: grey[200],
      borderRadius: "15rem",
    },
  };

  const [inputData, setInputData] = useState("");

  useEffect(()=>{
    if(isEdit)
    setInputData(commentData?.content)
  },[commentData?.content, isEdit])

  const {
    auth: { token },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const commentHandler = (event) => {
    if (inputData && event.key === "Enter") {
      dispatch(
        addComment({ commentData: { content: inputData }, token, postId })
      );
      setInputData("");
    }
  };
  const commentEditHandler = (event) => {
    if (inputData && event.key === "Enter") {
      dispatch(
        editComment({
          commentData: { ...commentData, content: inputData },
          token,
          postId,
          commentId: commentData._id,
        })
      );

      dispatch(resetEditComment());
      setInputData("");
    }
  };
  const commentFunc = isEdit
    ? (event) => commentEditHandler(event)
    : (event) => commentHandler(event);
  return (
    <Stack flexDirection="row" px={4} mt={3} gap={1} alignItems="center">
      <CurrentAvatar />
      <Box sx={{ width: "100%" }}>
        <TextField
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          onKeyDown={commentFunc}
          variant="standard"
          size="small"
          fullWidth
          InputProps={{ disableUnderline: true }}
          placeholder="Write a comment..."
          sx={commentFieldStyle}
        />
        <Typography
          variant="caption"
          component="p"
          pl={1.5}
          color={grey[500]}
          textAlign="Start"
        >
          Press Enter to Post
        </Typography>
      </Box>
    </Stack>
  );
};
