import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useContext, useState } from "react";
import { DateField, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import axios from "axios";
import apiList from "../../lib/apiList";
import { SetPopupContext } from "../../App";

const defaultTheme = createTheme();

const Adduser = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    role: "student",
    firstname: "",
    lastname: "",
    dateOfBirth: dayjs(),
    studentId: "",
    program: "",
  });

  const setPopup = useContext(SetPopupContext);

  const handleChange = (key, value) => {
    setUserDetails({
      ...userDetails,
      [key]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(apiList.signup, userDetails)
      .then((response) => {

        setPopup({
          open: true,
          message: response.data.message,
          severity: "success",
        });
      })
      .catch((err) => {
        setPopup({
          open: true,
          message: err.response.data.message,
          severity: "error",
        });
      });
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <ThemeProvider theme={defaultTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar>
              <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h6">
              Add User
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Grid container item spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    value={userDetails.firstname}
                    onChange={(event) =>
                      handleChange("firstname", event.target.value)
                    }
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    value={userDetails.lastname}
                    onChange={(event) =>
                      handleChange("lastname", event.target.value)
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    value={userDetails.email}
                    onChange={(event) =>
                      handleChange("email", event.target.value)
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="username"
                    fullWidth
                    value={userDetails.username}
                    onChange={(event) =>
                      handleChange("username", event.target.value)
                    }
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Password"
                    fullWidth
                    value={userDetails.password}
                    onChange={(event) =>
                      handleChange("password", event.target.value)
                    }
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    select
                    label="User Role"
                    fullWidth
                    value={userDetails.role}
                    onChange={(event) =>
                      handleChange("role", event.target.value)
                    }
                  >
                    <MenuItem value="admin">Admin</MenuItem>
                    <MenuItem value="student">Student</MenuItem>
                    <MenuItem value="facilitator">Facilitator</MenuItem>
                  </TextField>
                </Grid>

                <Grid item xs={12}>
                  <DateField
                    label="Date of Birth"
                    fullWidth
                    format="DD-MM-YYYY"
                    value={userDetails.dateOfBirth}
                    onChange={(newValue) =>
                      handleChange("dateOfBirth", newValue)
                    }
                  />
                </Grid>
                {userDetails.role === "student" ? (
                  <>
                    <Grid item xs={12}>
                      <TextField
                        label="Student Id"
                        fullWidth
                        value={userDetails.studentId}
                        onChange={(event) =>
                          handleChange("studentId", event.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Program"
                        fullWidth
                        value={userDetails.program}
                        onChange={(event) =>
                          handleChange("program", event.target.value)
                        }
                      />
                    </Grid>
                  </>
                ) : userDetails.role === "facilitator" ? (
                  <>
                    <Grid item>
                      <TextField label="Staff Id" />
                    </Grid>

                    <Grid item>
                      <TextField label="Department" />
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid item>
                      <TextField label="Staff Id" />
                    </Grid>
                  </>
                )}
              </Grid>
              <Grid item sx={{ mt: 2 }}>
                <Button type="sumit" variant="contained">
                  Save
                </Button>
              </Grid>
            </Box>
          </Box>
        </Container>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default Adduser;
