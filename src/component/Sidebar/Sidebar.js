import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Chip,
  Button,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { blue, blueGrey, grey } from "@mui/material/colors";
import { AddBox } from "@mui/icons-material";
import { useState } from "react";

import { navigationItems } from "../../utils/navigationActions";
import { SideBarStyles } from "../../styles/SideBarListStyle";
import { CurrentAvatar } from "../Home/CurrentAvatar";
import { CreatePostModal } from "../Home/CreatePostModal";

export const Sidebar = () => {
  const {
    SideBarContainer,
    UsernameChipStyle,
    NavigationLinksStyle,
    ProfileTileStyle,
  } = SideBarStyles;

  const activeStyle = {
    color: blue[600],
    borderLeft: `2px solid ${blueGrey[300]}`,
  };

  const [isAddPostModal, setIsAddPostModal] = useState(false);
  const openModal = () => setIsAddPostModal(true);
  const closeModal = () => setIsAddPostModal(false);

  const {
    auth: { userData },
  } = useSelector((state) => state);
  return (
    <MenuList sx={SideBarContainer}>
      <Link to={`/profile/${userData.username}`}>
        <MenuItem sx={ProfileTileStyle}>
          <CurrentAvatar />

          <ListItemText sx={{ display: "flex" }}>
            <Chip sx={UsernameChipStyle} label={userData.username} />
          </ListItemText>
        </MenuItem>
      </Link>
      {navigationItems.map((snap) => (
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : null)}
          key={snap.id}
          to={snap.link}
        >
          <MenuItem sx={NavigationLinksStyle}>
            <ListItemIcon sx={{ color: "inherit" }}>{snap.icon}</ListItemIcon>
            <ListItemText sx={{ textAlign: "start", color: grey[800] }}>
              {snap.text}
            </ListItemText>
          </MenuItem>
        </NavLink>
      ))}
      <CreatePostModal isOpen={isAddPostModal} handleClose={closeModal} />
      <MenuItem sx={NavigationLinksStyle} onClick={() => openModal()}>
        <Button
          variant="outlined"
          sx={{ width: "100%", borderWidth: 2 }}
          startIcon={
            <AddBox sx={{ fontSize: { xs: "x-large", sm: "xx-large" } }} />
          }
        >
          Post
        </Button>
      </MenuItem>
    </MenuList>
  );
};
