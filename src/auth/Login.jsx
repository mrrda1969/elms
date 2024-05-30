import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import axios from "axios";
import apiList from "../lib/apiList";
import isAuth from "../lib/isAuth";
import { SetPopupContext } from "../App";
import { Navigate } from "react-router";

const defaultTheme = createTheme();

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loggedin, setLoggedin] = useState(isAuth());
  const setPopup = useContext(SetPopupContext);

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const handleChange = (key, value) => {
    setLoginDetails({
      ...loginDetails,
      [key]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post(apiList.login, loginDetails)
      .then((response) => {
        if (response.data) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("role", response.data.role);
          localStorage.setItem("username", response.data.username);
          setLoggedin(isAuth());

          setPopup({
            open: true,
            severity: "success",
            message: "Logged in successfully",
          });
        } else {
          setPopup({
            open: true,
            severity: "error",
            message: "Invalid credentials",
          });
        }
      })
      .catch((err) => {
        setPopup({
          open: true,
          severity: "error",
          message: err.response.data.message,
        });
      });
  };
  return loggedin ? (
    <Navigate to="/" />
  ) : (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: 8,
            alignItems: "center",
          }}
        >
          <Avatar>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h6">
            Login
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              label="username"
              margin="normal"
              fullWidth
              value={loginDetails.username}
              onChange={(event) => handleChange("username", event.target.value)}
            />

            <TextField
              label="Password"
              margin="normal"
              fullWidth
              value={loginDetails.password}
              onChange={(event) => handleChange("password", event.target.value)}
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Login
            </Button>
            <Typography>
              Have you been shortlisted?{" "}
              <Link href="lookup">Click here to complete signup.</Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
