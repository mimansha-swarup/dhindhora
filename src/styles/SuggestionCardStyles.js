export const SuggestionCardStyles = {
  SuggestionContainerStyle: (theme) => ({
    p: 2,
    borderRadius: 3,
    display: {lg:"flex",sm:"none",xs:"none"},
    flexWrap: "wrap",

  }),
  ListStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    gap: 2,
  },
  ListTileStyle: (theme) => ({
    px: 2,
    mx: "auto",
    borderRadius: 1,
    boxShadow: theme.shadows[1],
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 2,
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
  }),
};
