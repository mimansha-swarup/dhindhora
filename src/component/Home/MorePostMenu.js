import { MoreHoriz } from '@mui/icons-material'
import { Box, Menu, MenuItem } from '@mui/material'
import { grey } from '@mui/material/colors'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPostContent } from '../../features/post/postSlice'
import { followUser, unfollowUser , deletePost } from "../../helper";
import { getCurrentUser } from '../../utils'
import { CreatePostModal } from "./CreatePostModal";

export const MorePostMenu = ({postInfo}) => {

  const {
    _id = "",
    username,
  
  } = postInfo;

  const {
    auth: { userData, token },
    user: { users },

  } = useSelector((state) => state);

  const dispatch = useDispatch()

  const [localActions, setLocalActions] = useState({
    isEditModalOpen: false,
  });
  const [menuAnchorElement, setMenuAnchorElement] = useState(null);

  const isMenuOpen = Boolean(menuAnchorElement);

  const handleMenuClick = (event) => setMenuAnchorElement(event.currentTarget);

  const handleMenuClose = () => setMenuAnchorElement(null);

  const handleOpenEditPostModal = () => {
    setLocalActions((prev) => ({
      ...prev,
      isEditModalOpen: true,
    }));
    dispatch(setPostContent(postInfo?.content));
    handleMenuClose();
  };

  const postUser = getCurrentUser(users, username);

  const postUserid = postUser?._id; //info of the one who posted
  const following = getCurrentUser(users, userData?.username)?.following; //info of logged in user

  return (
    <Box sx={{ color: isMenuOpen ? grey[700] : grey[400], ml: "auto" }}>
    <MoreHoriz onClick={handleMenuClick} />
    <CreatePostModal
      isOpen={localActions?.isEditModalOpen}
      handleClose={() =>
        setLocalActions((prev) => ({
          ...prev,
          isEditModalOpen: !prev?.isEditModalOpen,
        }))
      }
      isEdit={localActions?.isEditModalOpen}
      currentPost={postInfo}
    />
    <Menu
      anchorEl={menuAnchorElement}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {username === userData?.username ? (
        <div>
          <MenuItem onClick={handleOpenEditPostModal}>Edit</MenuItem>
          <MenuItem
            onClick={() => dispatch(deletePost({ postId: _id, token }))}
          >
            Delete
          </MenuItem>
        </div>
      ) : following.find(
          (eachUser) => eachUser?.username === username
        ) ? (
        <MenuItem
          onClick={() =>
            dispatch(unfollowUser({ unfollowerId: postUserid, token }))
          }
        >
          Unfollow
        </MenuItem>
      ) : (
        <MenuItem
          onClick={() =>
            dispatch(followUser({ followerId: postUserid, token }))
          }
        >
          Follow
        </MenuItem>
      )}
    </Menu>
  </Box>
  )
}
