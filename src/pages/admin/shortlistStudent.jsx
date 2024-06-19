import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  MenuItem,
  TextField,
  createTheme,
} from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import axios from "axios";
import apiList from "../../lib/apiList";
import { SetPopupContext } from "../../App";

const theme = createTheme();

const ShortlistStudent = () => {
  const [studentData, setStudentData] = useState({
    firstname: "",
    lastname: "",
    gender: "female",
    studentId: "",
  });

  const handleChange = (key, value) => {
    setStudentData({
      ...studentData,
      [key]: value,
    });
  };

  const setPopup = useContext(SetPopupContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(apiList.student.shortlist, studentData)
      .then((response) => {
        setPopup({
          open: true,
          severity: "success",
          message: response.data.message,
        });
      })
      .catch((err) => {
        setPopup({
          open: true,
          severity: "error",
          message: err.data.message,
        });
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
          }}
        >
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="First Name"
              margin="normal"
              fullWidth
              value={studentData.name}
              onChange={(e) => handleChange("firstname", e.target.value)}
            />
            <TextField
              label="Last Name"
              margin="normal"
              fullWidth
              value={studentData.lastname}
              onChange={(e) => handleChange("lastname", e.target.value)}
            />

            <TextField
              select
              margin="normal"
              fullWidth
              value={studentData.gender}
              onChange={(e) => handleChange("gender", e.target.value)}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </TextField>

            <TextField
              label="Student ID"
              margin="normal"
              fullWidth
              value={studentData.studentId}
              onChange={(e) => handleChange("studentId", e.target.value)}
            />
            <Button type="submit">Save</Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ShortlistStudent;
