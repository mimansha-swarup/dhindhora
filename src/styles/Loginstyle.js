export const LoginStyles = {
  loginContainerStyle: (theme) => ({
    height: "100%",
    display:"flex",
    [theme.breakpoints.up("sm")]: {
      py: 7,
    },
    [theme.breakpoints.only("xs")]: {
      py: 2,
    },
  }),

  loginBoxStyle: {
    width: "100%",
    display: "flex",
    alignSelf:"center",
    gap: 2,
    justifyContent: "space-around",
    flexDirection: {
      xs: "column",
      sm: "row",
    },
  },
  loginLogoBoxStyle: (theme) => ({
    display: "flex",
    gap: 2,
    flexDirection: "column",
    mx: "auto",
    [theme.breakpoints.up("sm")]: {
      py: 7,
      alignItems: "start",
    },
    [theme.breakpoints.only("xs")]: {
      alignItems: "center",
      py: 2,
    },
  }),
  
  paperStyle: {
    p: 3,
    py: 4,
    width: { xs: "27ch", sm: "40ch" },
    height:"fit-content",
    display: "flex",
    flexDirection: "column",
    gap: 2,
    mx: "auto",
    borderRadius: 2,
  },

  // SignUp STyle

  signUpModalStyle: {
    position: "absolute",
    borderRadius: 2,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {
      xs: "77%",
      sm: 400,
    },
    bgcolor: "background.paper",
    boxShadow: 20,
    p: {xs:2,sm:4},
  },
};
