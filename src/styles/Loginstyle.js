export const loginContainerStyle = {
  height: "100vh",
  py:{xs:7,sm:19}
};

export const loginBoxStyle = {
  width: "100%",
  display: "flex",
  gap: 2,
  justifyContent: "space-around",
  flexDirection: {
    xs: "column",
    sm: "row",
  },
};
export const loginLogoBoxStyle = {
  display: "flex",
  gap: 2,
  alignItems: {xs:"center", sm:"start"},
  flexDirection: "column",
  py:{xs:2,sm:7},
  mx:"auto",
};

export const paperStyle = {
  p: 3,
  py: 4,
  width: { xs: "27ch", sm: "40ch" },
  display: "flex",
  flexDirection: "column",
  gap: 2,
  mx:"auto",
  borderRadius:2,
};

// SignUp STyle

export const signUpModalStyle = {
  position: 'absolute',
  borderRadius:2,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs:"70%",
    sm:400
  },
  bgcolor: 'background.paper',
  boxShadow: 20,
  p: 4,
};