import { Button, Stack, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { Bookmark, ModeComment, ThumbUpAlt } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { bookmarkPost, dislikePost, likePost, unsavePost } from "../../helper";

import { HomePageStyles } from "../../styles/HomePageStyle";
import { Link } from "react-router-dom";

export const PostActionBar = ({ postInfo }) => {
  const { PostActionButtonStyles } = HomePageStyles;

  const {
    _id = "",
    likes: { likedBy, likeCount },comments
  } = postInfo;

  const {
    auth: { userData, token },
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

  return (
    <Stack flexDirection="row" justifyContent="stretch" p={1} gap={3}>
      <Button
        onClick={handleLikeDislike}
        sx={{
          ...PostActionButtonStyles,
          color: IsLiked() ? blue[600] : grey[600],
        }}
      >
        {" "}

        <ThumbUpAlt /> 
     
        {likeCount >= 1 ? likeCount : "Like"}
      
      </Button>
      <Link to={`/post/${_id}`}>
        <Button sx={PostActionButtonStyles}>

          <ModeComment /> 
    
          { comments.length>=1?comments.length:"Comment"}
 
        </Button>
      </Link>
      <Button
        onClick={handleBookmarkingOfPost}
        sx={{
          ...PostActionButtonStyles,
          color: isBookmarked() ? blue[600] : grey[600],
        }}
      >

        <Bookmark /> 
        <Typography variant="body1" component="p" display={{xs:"none",sm:"block"}} >
        {isBookmarked() ? "Unsave" : "Save"}
        </Typography>
          
      </Button>
    </Stack>
  );
};
