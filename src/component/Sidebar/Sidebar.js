import {
  ListItemIcon,
  Avatar,
  ListItemText,
  MenuItem,
  MenuList,
  Chip,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { navigationItems } from "../../utils/navigationActions";
import { SideBarStyles } from "../../styles/SideBarListStyle";

export const Sidebar = () => {
  const {
    SideBarContainer,
    UsernameChipStyle,
    NavigationLinksStyle,
    ProfileTileStyle,
  } = SideBarStyles;

  const {
    auth: { userData },
  } = useSelector((state) => state);
  return (
    <MenuList sx={SideBarContainer}>
      <Link to="/profile">
        <MenuItem sx={ProfileTileStyle}>
          <Avatar
            alt="profilepic"
            src={userData.profilePicture}
          />

          <ListItemText>
            <Chip sx={UsernameChipStyle} label={userData.username} />
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
