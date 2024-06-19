import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  createTheme,
} from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import axios from "axios";
import React, { useContext, useState } from "react";
import apiList from "../../lib/apiList";
import { SetPopupContext } from "../../App";

const theme = createTheme();

const CreateFaculty = () => {
  const [facultyData, setFacultyData] = useState({
    name: "",
    description: "",
  });

  const setPopup = useContext(SetPopupContext);

  const handleChange = (key, value) => {
    setFacultyData({
      ...facultyData,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(apiList.faculty.create, facultyData)
      .then((response) => {
        setPopup({
          open: true,
          severity: "success",
          message: response.data.message,
        });
      })
      .catch((err) => {
        console.error(err);
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
              label="Faculty Name"
              margin="normal"
              fullWidth
              value={facultyData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
            <TextField
              label="Description"
              margin="normal"
              multiline
              rows={3}
              fullWidth
              value={facultyData.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />

            <Button type="submit">Save</Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default CreateFaculty;
