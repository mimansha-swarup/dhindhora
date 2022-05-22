import { grey } from "@mui/material/colors";

export const NavbarStyle = {
  px: 3,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  mb:4,
};
export const userNameChipStyle = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  height: "2rem",
  borderRadius: "2rem",
  pr: 2,
  cursor: "pointer",
  "&:hover": { backgroundColor: grey[200] },
};
