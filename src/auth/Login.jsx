import { useContext, useState } from "react";
import axios from "axios";
import { Grid, TextField, Button } from "@mui/material";
import apiList from "../lib/apiList";
import { Navigate } from "react-router-dom";
import isAuth from "../lib/isAuth";
import { SetPopupContext } from "../App";
import {} from "react-icons";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  inputBox: {
    width: "300px",
  },
}));

const Login = () => {
  const classes = useStyles();

  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  const [loggedin, setLoggedin] = useState(isAuth());

  const setPopup = useContext(SetPopupContext);

  const [error, setError] = useState(null);

  const handleInput = (key, value) => {
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
          console.log(response.data);
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
          setError("Invalid credentials");
          setPopup({
            open: true,
            severity: "error",
            message: "Invalid credentials",
          });
        }
        console.log(response);
      })
      .catch((error) => {
        setError("Internal Server Error");
        setPopup({
          open: true,
          severity: "error",
          message: error.response.data.message,
        });
        console.log(error);
      });
  };

  return loggedin ? (
    <Navigate to="/protected" />
  ) : (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            label="Username"
            variant="outlined"
            value={loginDetails.username}
            className={classes.inputBox}
            onChange={(event) => handleInput("username", event.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={loginDetails.password}
            onChange={(event) => {
              handleInput("password", event.target.value);
            }}
          />
        </Grid>

        <Grid item>
          <Button type="submit" variant="contained">
            Login
          </Button>
        </Grid>

        {error && <div style={{ color: "red" }}>{error}</div>}
      </Grid>
    </form>
  );
};

export default Login;
