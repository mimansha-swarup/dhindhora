import { MoreHoriz } from "@mui/icons-material";
import { Box, Menu, MenuItem } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditComment } from "../../features/post/postSlice";
import {  deleteComment } from "../../helper";


export const MoreCommentMenu = ({ commentInfo,postId }) => {
  const { _id = "" } = commentInfo;

  const {
    auth: { token },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const [menuAnchorElement, setMenuAnchorElement] = useState(null);

  const isMenuOpen = Boolean(menuAnchorElement);

  const handleMenuClick = (event) => setMenuAnchorElement(event.currentTarget);

  const handleMenuClose = () => setMenuAnchorElement(null);

  return (
    <Box sx={{ color: isMenuOpen ? grey[700] : grey[400], ml: "auto",cursor:"pointer" }}>
      <MoreHoriz onClick={handleMenuClick} />
      {/* Todo: edit post Container */}
      <Menu
        anchorEl={menuAnchorElement}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={()=>{dispatch(setEditComment(_id))}}>Edit</MenuItem>
        <MenuItem onClick={() => dispatch(deleteComment({ commentId: _id, postId,token }))}>
          Delete
        </MenuItem>
      </Menu>
    </Box>
  );
};
