import {
  ListItemIcon,
  Avatar,
  ListItemText,
  MenuItem,
  MenuList,
  Chip,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { navigationItems } from "../../utils/navigationActions";
import { SideBarStyles } from "../../styles/SideBarListStyle";

export const Sidebar = () => {
  const {
    SideBarContainer,
    UsernameChipStyle,
    NavigationLinksStyle,
    ProfileTileStyle,
  } = SideBarStyles;
  return (
    <MenuList sx={SideBarContainer}>
      <Link to="/profile">
        <MenuItem sx={ProfileTileStyle}>
          <Avatar
            alt="profilepic"
            src="https://media1.thehungryjpeg.com/thumbs2/ori_3944071_je7b4gk3datpeei8e81xyz2xb35qiqxtrjicl1qx_woman-avatar-icon-vector-flat.jpg"
          />

          <ListItemText>
            <Chip sx={UsernameChipStyle} label={"@monkesxxxxxxxxxxxxxxxxch"} />
          </ListItemText>
        </MenuItem>
      </Link>
      {navigationItems.map((snap) => (
        <Link key={snap.id} to={snap.link}>
          <MenuItem sx={NavigationLinksStyle}>
            <ListItemIcon>{snap.icon}</ListItemIcon>
            <ListItemText sx={{ textAlign: "start" }}>{snap.text}</ListItemText>
          </MenuItem>
        </Link>
      ))}
    </MenuList>
  );
};
