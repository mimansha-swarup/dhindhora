import {
  Stack,
  Avatar,
  Typography,
  Button,
  Paper,
  Divider,
  Box,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { Logout } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";

import { signOutHandler } from "../../features/auth/authSlice";
import { useState } from "react";
import { EditModal } from "./EditModal";
import { getCurrentUser, isFollowed } from "../../utils";
import { followUser, unfollowUser } from "../../helper/user";
import { FollowerModal } from "./FollowerModal";
import { FollowingModal } from "./FollowingModal";

export const ProfileHeader = ({ currUser }) => {
  const {
    auth: { userData, token },
    user: { users },
  } = useSelector((state) => state);
  const [actions, setActions] = useState({
    editOpen: false,
    followerOpen: false,
    followingOpen: false,
  });

  const dispatch = useDispatch();

  const selectUser = getCurrentUser(users, userData.username);

  const handleActionChange = (actionName) =>
    setActions((prevAction) => ({
      ...prevAction,
      [actionName]: !prevAction[actionName],
    }));

  const handleFollowUser = () =>
    dispatch(followUser({ followerId: currUser._id, token }));

  const handleUnfollowUser = () =>
    dispatch(unfollowUser({ unfollowerId: currUser._id, token }));

  return (
    <Paper sx={{ p: 2 }}>
      <Box
        sx={{ display: { xs: "flex", sm: "none" }, color: grey[600] }}
        onClick={() => dispatch(signOutHandler())}
      >
        <Logout sx={{ ml: "auto" }} />
      </Box>
      <Stack alignItems="center" gap={1}>
        <Stack flexDirection="row" gap={1} width="100%" flexWrap="wrap">
          <Avatar
            alt="profile-pic"
            src={currUser?.profilePicture}
            sx={{ height: 156, width: 156, mx: { xs: "auto" } }}
          />
          <Stack
            flexDirection="column"
            justifyContent="center"
            gap={1}
            width="50%"
            mx="auto"
          >
            <Typography fontWeight={500} variant="body1" component={"p"}>
              {`${currUser?.firstName} ${currUser?.lastName}`}
            </Typography>
            <Typography variant="body2" component={"p"} color={grey[600]}>
              {`@${currUser?.username}`}
            </Typography>
            {currUser?._id === userData._id ? (
              <>
                <Button
                  variant="outlined"
                  onClick={() => handleActionChange("editOpen")}
                  sx={{ borderRadius: 4 }}
                  color="info"
                >
                  Edit Profile
                </Button>
                <EditModal
                  currUser={currUser}
                  open={actions.editOpen}
                  onClose={() => handleActionChange("editOpen")}
                />
              </>
            ) : isFollowed(selectUser, currUser) ? (
              <Button
                onClick={handleUnfollowUser}
                variant="outlined"
                sx={{ borderRadius: 4 }}
                color="info"
              >
                Unfollow
              </Button>
            ) : (
              <Button
                onClick={handleFollowUser}
                variant="contained"
                sx={{ borderRadius: 4 }}
                color="info"
              >
                Follow
              </Button>
            )}
          </Stack>
        </Stack>
        <Typography variant="subtitle1" component={"p"} color={grey[700]}>
          {currUser?.bio}
        </Typography>
        <Typography variant="subtitle2" component={"p"} color={blue[300]}>
          <a href={currUser?.website} target="_blank" rel="noopener noreferrer">
            {currUser?.website}
          </a>
        </Typography>
        <Stack
          flexDirection="row"
          gap={2}
          width="80%"
          mx="auto"
          justifyContent="space-around"
          color={grey[600]}
        >
          <Stack>
            Posts
            <span>{0}</span>
          </Stack>
          <Divider orientation="vertical" flexItem />
          <FollowerModal
            username={currUser.username}
            open={actions.followerOpen}
            onClose={() => handleActionChange("followerOpen")}
          />
          <Stack
            sx={{ cursor: "pointer" }}
            onClick={() => handleActionChange("followerOpen")}
          >
            Followers
            <span>{currUser.followers.length}</span>
          </Stack>
          <Divider orientation="vertical" flexItem />
          <FollowingModal
            username={currUser.username}
            open={actions.followingOpen}
            handleClose={() => handleActionChange("followingOpen")}
          />
          <Stack
            sx={{ cursor: "pointer" }}
            onClick={() => handleActionChange("followingOpen")}
          >
            Following
            <span>{currUser.following.length}</span>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};
