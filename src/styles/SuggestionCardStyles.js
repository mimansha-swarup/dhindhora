export const SuggestionCardStyles = {
  SuggestionContainerStyle: (theme) => ({
    p: 2,
    borderRadius: 3,
    // boxShadow: theme.shadows[3],
    // backgroundColor: theme.palette.grey[100],
    display: {lg:"flex",sm:"none",xs:"none"},
    flexWrap: "wrap",
    // width: "90%",
    // m: "auto",
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

    flexWrap: "wrap",
    gap: 2,

    alignItems: "center",
    justifyContent: "start",
    backgroundColor: theme.palette.background.paper,
  }),
};
