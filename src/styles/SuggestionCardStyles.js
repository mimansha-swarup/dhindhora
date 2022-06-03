export const SuggestionCardStyles = {
  SuggestionContainerStyle:{
    p: 2,
    borderRadius: 3,
    display: { lg: "flex", sm: "none", xs: "none" },
    flexDirection: "column",
  },

  ListStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
  ListAvatarStyle: {
    height: "64px",
    width: "64px",
  },
  ListTileStyle: (theme) => ({
    px: 2,
    mx: "auto",
    borderRadius: 1,
    boxShadow: theme.shadows[1],
    display: "flex",
    justifyContent: "center",
    width: "100%",
    gap: 1,
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
  }),
};
