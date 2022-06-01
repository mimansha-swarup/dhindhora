import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Bookmark, ModeComment, ThumbUpAlt } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
  Container,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";

import { HomePageStyles } from "../../styles/HomePageStyle";
import { getCurrentUser } from "../../utils";
import { dislikePost, likePost, unsavePost, bookmarkPost } from "../../helper";
import { MorePostMenu } from "./MorePostMenu";

export const Post = ({ postInfo }) => {
  const {
    PostContainerStyle,
    PostActionButtonStyles,
    UserNameStyle,
    PostDividerStyle,
  } = HomePageStyles;

  const {
    _id = "",
    content,
    username,
    updatedAt,
    likes: { likedBy, likeCount },
  } = postInfo;

  const {
    auth: { userData, token },
    user: { users },
    bookmark: { bookmarkedPost },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const IsLiked = () =>
    likedBy.find(
      (userWhoLiked) => userWhoLiked?.userName === userData?.userName
    );
  const isBookmarked = () =>
    bookmarkedPost.find((bookmarkedId) => bookmarkedId === _id);

  const handleLikeDislike = () =>
    IsLiked()
      ? dispatch(dislikePost({ postId: _id, token }))
      : dispatch(likePost({ postId: _id, token }));

  const handleBookmarkingOfPost = () =>
    isBookmarked()
      ? dispatch(unsavePost({ postId: _id, token }))
      : dispatch(bookmarkPost({ postId: _id, token }));

  const postUser = getCurrentUser(users, username);

  const profilePicture = postUser?.profilePicture; //info of the one who posted

  return (
    <Paper sx={PostContainerStyle}>
      <Stack flexDirection="row" p={2} gap={3} alignItems="center">
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
      <Stack flexDirection="row" justifyContent="stretch" p={1} gap={3}>
        <Button
          onClick={handleLikeDislike}
          sx={{
            ...PostActionButtonStyles,
            color: IsLiked() ? blue[600] : grey[600],
          }}
        >
          {" "}
          <ThumbUpAlt /> {likeCount >= 1 ? likeCount : "Like"}
        </Button>
        <Button sx={PostActionButtonStyles}>
          {" "}
          <ModeComment /> Comment
        </Button>
        <Button
          onClick={handleBookmarkingOfPost}
          sx={{
            ...PostActionButtonStyles,
            color: isBookmarked() ? blue[600] : grey[600],
          }}
        >
          {" "}
          <Bookmark /> {isBookmarked() ? "Unsave" : "Save"}
        </Button>
      </Stack>
    </Paper>
  );
};
