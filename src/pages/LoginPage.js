import { useState } from "react";
import {   PersonOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Container,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Paper,
  Button,
  Divider,
  Box,
  Typography,
  useTheme,
  Stack,
} from "@mui/material";
import { LoginStyles } from "../styles/Loginstyle";
import { SignUpModal } from "../component";
import { useDispatch } from "react-redux";
import { loginHandler } from "../helper/auth";

export const LoginPage = () => {
  const { palette } = useTheme();
  const {loginContainerStyle,loginBoxStyle,loginLogoBoxStyle,paperStyle} = LoginStyles;

  const [loginLocalActions, setLoginLocalActions] = useState({
    showPassword: false,
    openModal: false,
  });

 const dispatch  = useDispatch()
  const handleClickShowPassword = () =>
    setLoginLocalActions((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));
  const handleOpenModal = () =>
    setLoginLocalActions((prevState) => ({
      ...prevState,
      openModal: !prevState.openModal,
    }));

  const handleFormChange = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    dispatch(loginHandler({username,password}))
    // event.reset();
  };
  
  const LoginWithTestCredential = () =>{
    
    dispatch(loginHandler({username:"slayer",password:"clankiller123"}))
  }

  return (
    <div className="login-bg">
      <Container sx={loginContainerStyle}>
        <Box sx={loginBoxStyle}>
          <Box sx={loginLogoBoxStyle}>
            <Typography
              variant="h2"
              fontWeight={"500"}
              component="h2"
              color={palette.primary.main}
            >
              Dhindhora
            </Typography>
            <Typography
              variant="body1"
              maxWidth={"25rem"}
              textAlign={"start"}
              component="p"
            >
              Dhindhora allows you to share your true self with those you care
              about.
            </Typography>
          </Box>
          <Paper sx={paperStyle} elevation={3}>
            <form onSubmit={handleFormChange}>
              <Stack gap={2}>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="username">Username</InputLabel>
                  <OutlinedInput
                    required
                    id="username"
                    type="text"
                    startAdornment={
                      <InputAdornment position="start">
                        <IconButton edge="start">
                          <PersonOutlined />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Username"
                  />
                </FormControl>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <OutlinedInput
                    required
                    id="password"
                    type={loginLocalActions.showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {loginLocalActions.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <Button
                  size="large"
                  variant="contained"
                  color="info"
                  type="submit"
                >
                  Log in
                </Button>
              </Stack>
            </form>
     
            <Button onClick={LoginWithTestCredential} size="small" variant="text" sx={{ m: 0 }} color="info">
              Log in as Guest
            </Button>
           
            <Divider />
            <Button
              sx={{ width: "75%", mx: "auto", my: 1, p: 1.25 }}
              size="small"
              variant="contained"
              color={"success"}
              onClick={handleOpenModal}
            >
              Create New Account
            </Button>
          </Paper>
        </Box>
        <SignUpModal
          isOpen={loginLocalActions.openModal}
          onClose={handleOpenModal}
        />
      </Container>
    </div>
  );
};
