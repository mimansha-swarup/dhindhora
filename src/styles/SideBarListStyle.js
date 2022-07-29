import { grey } from "@mui/material/colors";

export const SideBarStyles = {
  SideBarContainer: {
    px: 1,
    width: "inherit",
    borderRadius: 2,
    display: { xs: "none", sm: "flex" },
    flexDirection: "column",
    gap: 3,
    color: grey[600],
    position: "sticky",
    top: "8.5rem",
  },
  NavigationLinksStyle: { display: "flex", gap: 1.5, px: 1, borderRadius: 1 },
  ProfileTileStyle: { display: "flex", px: 1 },
  UsernameChipStyle: { background: "inherit", m: 0, mr: "auto", width: "100%" },
};
