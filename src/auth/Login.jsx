import { useState } from "react";
import { TextField, Button, Typography, Grid } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log(formData); // Pass the login data to the parent component
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        padding={4}
        xs={12}
      >
        <Grid item alignItems="center">
          <LockOutlined color="secondary" />
          <Typography variant="h6">Login</Typography>
        </Grid>

        <Grid item>
          <TextField
            fullWidth
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </Grid>

        <Grid item>
          <TextField
            fullWidth
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Grid>

        <Grid item>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Login;
