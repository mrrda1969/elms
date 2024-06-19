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
import React, { useContext, useEffect, useState } from "react";
import apiList from "../../lib/apiList";
import { SetPopupContext } from "../../App";

const theme = createTheme();

const CreateDepartment = () => {
  useEffect(() => {
    getData();
  }, []);

  const [departmentData, setDepartmentData] = useState({
    name: "",
    description: "",
    faculty: "",
  });

  const setPopup = useContext(SetPopupContext);

  const [menuValues, setMenuValues] = useState([]);

  const getData = () => {
    axios
      .get(apiList.faculty.getAll)
      .then((response) => {
        setMenuValues(response.data);
      })
      .catch((err) => {
        setPopup({
          open: true,
          severity: "error",
          message: `Error fetching data ${err}`,
        });
      });
  };

  const handleChange = (key, value) => {
    setDepartmentData({
      ...departmentData,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(apiList.department.create, departmentData)
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              select
              label="Select Faculty"
              value={departmentData.faculty}
              onChange={(event) => handleChange("faculty", event.target.value)}
              fullWidth
            >
              {menuValues.map((menuValue, faculty) => (
                <MenuItem key={faculty} value={menuValue._id}>
                  {menuValue.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Department Name"
              margin="normal"
              fullWidth
              value={departmentData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
            <TextField
              label="Description"
              margin="normal"
              multiline
              rows={3}
              fullWidth
              value={departmentData.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />

            <Button type="submit">Save</Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default CreateDepartment;
