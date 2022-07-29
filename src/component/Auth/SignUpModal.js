import { Close, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Modal,
  Box,
  Stack,
  Typography,
  Divider,
  TextField,
  Button,
  FormControl,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { signUpHandler } from "../../helper/auth";
import { LoginStyles } from "../../styles/Loginstyle";

export const SignUpModal = ({ isOpen, onClose }) => {
  const { signUpModalStyle } = LoginStyles;
  const [passwordState, setPasswordState] = useState({
    isError: false,
    showPassword: false,
    showConfirmPassword: false,
  });
const dispatch = useDispatch()

  const handleClickShowPassword = (key) =>
    setPasswordState((prevState) => ({ ...prevState, [key]: !prevState[key] }));
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const username = event.target.username.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    if (password === confirmPassword) {
      console.log(username, password);
      setPasswordState((prevState) => ({ ...prevState, isError: false }));
      dispatch(signUpHandler({firstName,lastName,username,password}))
      onClose();
    } else {
      setPasswordState((prevState) => ({ ...prevState, isError: true }));
      toast.error("Password dosen't match")
    }
  };
  return (
    <Modal open={isOpen} onClose={onClose} aria-labelledby="signup Modal">
      <Box sx={signUpModalStyle}>
        <Stack direction={"column"} gap={2}>
          <Stack
            direction={"row"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Typography
              id="modal-modal-title"
              variant="h5"
              fontWeight={500}
              component="h2"
            >
              Sign Up
            </Typography>
            <Close onClick={onClose} />
          </Stack>
          <Divider />
          <form onSubmit={handleFormSubmit}>
            <Stack gap={2}>
              <Stack direction="row" gap={2}>
                <TextField required id="firstName" label="First Name" />
                <TextField required id="lastName" label="Last Name" />
              </Stack>
              <TextField required id="username" label="Username" />

              <FormControl variant="outlined">
                <InputLabel htmlFor="password" error={passwordState.isError}>
                  Password
                </InputLabel>
                <OutlinedInput
                  required
                  error={passwordState.isError}
                  id="password"
                  type={passwordState.showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => handleClickShowPassword("showPassword")}
                        edge="end"
                      >
                        {passwordState.showPassword ? (
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
              <FormControl variant="outlined">
                <InputLabel
                  htmlFor="confirmPassword"
                  error={passwordState.isError}
                >
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  required
                  error={passwordState.isError}
                  helperText="hello"
                  he
                  id="confirmPassword"
                  type={passwordState.showConfirmPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() =>
                          handleClickShowPassword("showConfirmPassword")
                        }
                        edge="end"
                      >
                        {passwordState.showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm Password"
                />
                {passwordState.isError && (
                  <Typography
                    variant="caption"
                    component="p"
                    color={red[500]}
                    m={1}
                  >
                    Password dosen't match
                  </Typography>
                )}
              </FormControl>
            </Stack>
            <Button
              sx={{ m: 3, width: "90%", p: 1.5 }}
              variant="contained"
              type={"submit"}
              size="large"
              color="success"
            >
              Sign Up
            </Button>
          </form>
        </Stack>
      </Box>
    </Modal>
  );
};
