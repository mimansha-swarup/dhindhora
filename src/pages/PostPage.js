
import {
  Avatar,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import moment from "moment";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import {
  HomeLayout,
  CommentBox,
  MorePostMenu,
  MoreCommentMenu,
  PostActionBar,
} from "../component";
import { HomePageStyles } from "../styles/HomePageStyle";
import { getCurrentUser } from "../utils";

export const PostPage = () => {
  const { PostContainerStyle, UserNameStyle, PostDividerStyle } =
    HomePageStyles;

  const { postId } = useParams();
  const [inputData, setInputData] = useState("");
  const [inputEditData, setInputEditData] = useState("");

  const {
    post: { allPosts, editCommentId },
    user: { users },
    auth: { userData },
  } = useSelector((state) => state);

  const postInfo = allPosts.find((eachPost) => eachPost._id === postId);
  const { content, username, updatedAt, comments } = postInfo;


  const profilePicture = getCurrentUser(users, username)?.profilePicture;

  return (
    <HomeLayout>
      <Paper sx={{ ...PostContainerStyle, pb: 4 }}>
        <Stack flexDirection="row" p={2} gap={2} alignItems="center">
          <Link to={`/profile/${username}`}>
            <Avatar alt="profile-pic" src={profilePicture} />
          </Link>
          <Stack alignItems="start">
            <Typography sx={UserNameStyle} variant="subtitle1" component="p">
              {username}
            </Typography>
            <Typography variant="caption" component="p" color={grey[500]}>
              {moment(updatedAt).fromNow()}
            </Typography>
          </Stack>

          <MorePostMenu postInfo={postInfo} />
        </Stack>
        <Container>
          <Typography
            mb={3}
            variant="body1"
            component="p"
            textAlign="start"
            color={grey[700]}
          >
            {content}
          </Typography>
        </Container>

        <Divider sx={PostDividerStyle} />

        <PostActionBar postInfo={postInfo} />
        <Divider sx={PostDividerStyle} />
        {/* //comment BOx */}
        <CommentBox
          isEdit={false}
          postId={postId}
          inputData={inputData}
          setInputData={setInputData}
        />
        <List>
          {[...comments].reverse().map((commentData) =>
            editCommentId === commentData._id ? (
              <CommentBox
                postId={postId}
                isEdit={true}
                commentData={commentData}
                inputData={inputEditData}
                setInputData={setInputEditData}
              />
            ) : (
              <Stack key={commentData._id} px={2} my={3} position="relative">
                <ListItem
                  sx={{ background: grey[50], borderRadius: "1rem", py: 0.5 }}
                >
                  <ListItemAvatar>
                    <Avatar
                      src={
                        getCurrentUser(users, commentData?.username)
                          ?.profilePicture
                      }
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={commentData.username}
                    secondary={commentData?.content}
                  />
                  <ListItemIcon>
                    {userData?.username === commentData?.username && (
                      <MoreCommentMenu
                        postId={postId}
                        commentInfo={commentData}
                        setInputData={setInputEditData}
                      />
                    )}
                  </ListItemIcon>
                </ListItem>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    position: "absolute",
                    bottom: "-1rem",
                    left: 85,
                  }}
                >
                  <Typography ml={.5} color={grey[600]} variant="caption">
                    {moment(commentData?.updatedAt).fromNow()}
                  </Typography>
                </Box>
              </Stack>
            )
          )}
        </List>
      </Paper>
    </HomeLayout>
  );
};
