import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import {
  Avatar,
  Divider,
  Paper,
  Stack,
  Typography,
  Container,
} from "@mui/material";
import { grey } from "@mui/material/colors";

import { HomePageStyles } from "../../styles/HomePageStyle";
import { getCurrentUser } from "../../utils";
import { MorePostMenu } from "./MorePostMenu";
import { PostActionBar } from "./PostActionBar";

export const Post = ({ postInfo }) => {
  const {
    PostContainerStyle,

    UserNameStyle,
    PostDividerStyle,
  } = HomePageStyles;

  const { _id = "", content, username, updatedAt } = postInfo;

  const {
    user: { users },
  } = useSelector((state) => state);

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
      <Link to={`/post/${_id}`}>
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
      </Link>
      <Divider sx={PostDividerStyle} />
      <PostActionBar postInfo={postInfo} />
    </Paper>
  );
};
