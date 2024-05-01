import { ThemeProvider } from "@emotion/react";
import { TextField, Button, Grid, createTheme, MenuItem } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import apiList from "../lib/apiList";

export default function Register() {
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const [data, setData] = useState({
    username: "",
    email: "",
    role: "user",
    password: "",
  });

  const handleInput = (key, value) => {
    setData({
      ...data,
      [key]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(apiList.signup, data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          direction="column"
          xl={12}
          padding={3}
          spacing={3}
          justifyContent="center"
        >
          <Grid container spacing={2} margin={1}>
            <Grid item>
              <TextField
                placeholder="User Name"
                label="User Name"
                name="username"
                autoFocus
                value={data.username}
                onChange={(event) => {
                  handleInput("username", event.target.value);
                }}
              />
            </Grid>

            <Grid item>
              <TextField
                placeholder="email"
                label="Email"
                type="email"
                name="email"
                value={data.email}
                onChange={(event) => {
                  handleInput("email", event.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Grid item>
            <TextField
              select
              label="User Role"
              variant="outlined"
              name="role"
              value={data.role}
              onChange={(event) => {
                handleInput("role", event.target.value);
              }}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="user">User</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              label="Password"
              name="password"
              value={data.password}
              onChange={(event) => {
                handleInput("password", event.target.value);
              }}
            />
          </Grid>

          <Grid item>
            <Button type="submit" variant="contained" size="auto">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </ThemeProvider>
  );
}
