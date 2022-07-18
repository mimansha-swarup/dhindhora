import { alpha } from "@mui/material";
import { grey } from "@mui/material/colors";

export const NavStyles = {
  NavbarStyle: (theme) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    px: 5,

    [theme.breakpoints.only("sm")]: {
      px: 3,
      top: 0,
      bottom: "auto",
    },
    [theme.breakpoints.only("xs")]: {
      px: 0,
      top: "auto",
      bottom: 0,
    },
  }),
  userNameChipStyle: {
    display: { xs: "none", sm: "flex" },
    alignItems: "center",
    gap: 1,
    height: "2rem",
    borderRadius: "2rem",
    pr: 2,
    cursor: "pointer",

    "&:hover": { backgroundColor: grey[200] },
  },

  iconStyle: {
    fontSize: { xs: "x-large", sm: "xx-large" },
    color: { xs: grey[500] },
  },

  appBarStyle: {
    width: "100%",
    justifyContent: "space-between",
    display: { xs: "flex", sm: "none" },
  },
  actionbarStyle: { mr: {sm:0,lg:3}, display: { xs: "none", sm: "flex" } },
  dpStyle: { width: 30, height: 30 },
  brandImageStyle: {
    display: { xs: "none", sm: "flex" },
    ml: 3,
  },
};

export const SearchStyle = (theme) => 

   ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${alpha(theme.palette.info.main, 0.35)}`,
    display: { xs: "none", sm: "flex" },
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.grey["500"],
    px:2,
    backgroundColor: alpha(theme.palette.info.light, 0.08),
    "&:hover": {
      backgroundColor: alpha(theme.palette.info.main, 0.05),
    },
    marginLeft: theme.spacing(2),
    marginRight: 0,
    width: "40%",
  
  });


export const SearchInputStyle = (theme) => ({
  flexGrow: "2",
  color: theme.palette.grey["900"],
});
