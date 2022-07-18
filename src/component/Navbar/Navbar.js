import {
  AppBar,
  Avatar,
  Toolbar,
  Box,
  Typography,
  MenuItem,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { AddRounded, Logout, Person } from "@mui/icons-material";
import { blue,  grey } from "@mui/material/colors";
import { useState } from "react";

import { brandImage } from "../../assets";
import { navigationItems } from "../../utils/navigationActions";
import { NavStyles } from "../../styles/NavbarStyle";
import { signOutHandler } from "../../features/auth/authSlice";
import { CurrentAvatar } from "../Home/CurrentAvatar";
import { CreatePostModal } from "../Home/CreatePostModal";
import { SearchBar } from "./SearchBar";
const Navbar = () => {
  const {
    brandImageStyle,
    dpStyle,
    appBarStyle,
    iconStyle,
    NavbarStyle,
    actionbarStyle,
    userNameChipStyle,
  } = NavStyles;

  const activeStyle = {
    color: blue[800],
  };

  const [isAddPostModal, setIsAddPostModal] = useState(false);
  const openModal = () => setIsAddPostModal(true); 
  const closeModal = () => setIsAddPostModal(false);

  const {
    auth: { userData },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <AppBar position="fixed" color="inherit" sx={NavbarStyle}>
      <Link to="/">
        <Avatar alt="brandLogo" sx={brandImageStyle} src={brandImage} />
      </Link>
      <SearchBar/>
      <Toolbar sx={appBarStyle}>
        {navigationItems.map((snap) => (
          <NavLink
            key={snap.id}
            to={snap.link}
            style={({ isActive }) =>
              isActive ? activeStyle : { color: grey[500] }
            }
          >
            <MenuItem>{snap.icon}</MenuItem>
          </NavLink>
        ))}
        <CreatePostModal isOpen={isAddPostModal} handleClose={closeModal} />
        <MenuItem onClick={openModal} >
          <AddRounded sx={iconStyle} />
        </MenuItem>
        <NavLink
          to={`/profile/${userData.username}`}
          style={({ isActive }) =>
            isActive ? activeStyle : { color: grey[500] }
          }
        >
          <MenuItem>
            <Person />
          </MenuItem>
        </NavLink>
      </Toolbar>
      <Toolbar sx={actionbarStyle}>
        <Link to={`/profile/${userData.username}`}>
          <Box sx={userNameChipStyle}>
            <CurrentAvatar sx={dpStyle} />

            <Typography variant="caption" component="span">
              {userData.username}
            </Typography>
          </Box>
        </Link>
        
          <Logout sx={{ml:1,cursor:"pointer"}} onClick={() => dispatch(signOutHandler())} />
        
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
