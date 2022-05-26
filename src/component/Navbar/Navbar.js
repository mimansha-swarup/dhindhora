import {
  AppBar,
  Avatar,
  Toolbar,
  Box,
  Typography,
  MenuItem,
} from "@mui/material";

import { brandImage } from "../../assets";
import { navigationItems } from "../../utils/navigationActions";
import { NavStyles } from "../../styles/NavbarStyle";
import { Link } from "react-router-dom";
import { AddRounded, Login, Logout, Person } from "@mui/icons-material";
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

  return (
    <AppBar position="fixed" color="inherit" sx={NavbarStyle}>
      <Avatar alt="brandLogo" sx={brandImageStyle} src={brandImage} />
      <Toolbar sx={appBarStyle}>
        {navigationItems.map((snap) => (
          <Link key={snap.id} to={snap.link}>
            <MenuItem>{snap.icon}</MenuItem>
          </Link>
        ))}
        <MenuItem>
          <AddRounded sx={iconStyle} />
        </MenuItem>
        <Link to="/profile">
          <MenuItem>
            <Person sx={iconStyle} />
          </MenuItem>
        </Link>
      </Toolbar>
      <Toolbar sx={actionbarStyle}>
        <Link to="/profile">
          <Box sx={userNameChipStyle}>
            <Avatar
              alt="ProfilePicture"
              src="https://media1.thehungryjpeg.com/thumbs2/ori_3944071_je7b4gk3datpeei8e81xyz2xb35qiqxtrjicl1qx_woman-avatar-icon-vector-flat.jpg"
              sx={dpStyle}
            />
            <Typography variant="caption" component="span">
              @monkesh
            </Typography>
          </Box>
        </Link>
        <Link to="/login">
          <Logout />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
