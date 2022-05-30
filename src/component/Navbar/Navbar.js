import {
  AppBar,
  Avatar,
  Toolbar,
  Box,
  Typography,
  MenuItem,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AddRounded, Logout, Person } from "@mui/icons-material";

import { brandImage } from "../../assets";
import { navigationItems } from "../../utils/navigationActions";
import { NavStyles } from "../../styles/NavbarStyle";
import { signOutHandler } from "../../features/auth/authSlice";
import { CurrentAvatar } from "../Home/CurrentAvatar";
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

  const {
    auth: { userData },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <AppBar position="fixed" color="inherit" sx={NavbarStyle}>
      <Link to="/">
        <Avatar alt="brandLogo" sx={brandImageStyle} src={brandImage} />
      </Link>
      <Toolbar sx={appBarStyle}>
        {navigationItems.map((snap) => (
          <Link key={snap.id} to={snap.link}>
            <MenuItem>{snap.icon}</MenuItem>
          </Link>
        ))}
        <MenuItem>
          <AddRounded sx={iconStyle} />
        </MenuItem>
        <Link to={`/profile/${userData.username}`}>
          <MenuItem>
            <Person sx={iconStyle} />
          </MenuItem>
        </Link>
      </Toolbar>
      <Toolbar sx={actionbarStyle}>
        <Link to={`/profile/${userData.username}`}>
          <Box sx={userNameChipStyle}>
            <CurrentAvatar sx={dpStyle} />

            <Typography variant="caption" component="span">
              @{userData.username}
            </Typography>
          </Box>
        </Link>
        <div onClick={() => dispatch(signOutHandler())}>
          <Logout />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
