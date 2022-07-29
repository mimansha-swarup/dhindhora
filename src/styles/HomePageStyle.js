import { grey } from "@mui/material/colors";
export const HomePageStyles = {
  // Layout
  contentContainerStyle: (theme) => ({
    width: "92%",
    mx: "auto",
    [theme.breakpoints.up("sm")]: {
      py: 12,
    },
    [theme.breakpoints.only("xs")]: {
      py: 2,
    },
  }),
  contentBoxStyle: { maxWidth: "36.875rem", mx: "auto" },
  // Homepage
  // Homepage -> AddPost
  AddPostContainerStyle: { p: 2 },
  AddPostInputStyle: { width: "100%" },

  // Post
  PostContainerStyle: { my: 3, borderRadius: 3 },
  UserNameStyle: { lineHeight: 1 },
  PostDividerStyle: { width: "90%", m: "auto" },
  PostActionButtonStyles: {
    color: grey[600],
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: {xs:1,sm:1.25
    ,}
  },
  SortDividerStyle : { width:"100%" ,my:1.25},
  SortLabelStyle :{ color: grey[500],mr:1 },
  SortSelcetStyle :{ p:0,m:0 },
};
