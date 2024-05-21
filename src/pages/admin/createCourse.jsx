import { Box, Container, createTheme, TextField, Button } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import axios from "axios";
import { createContext, useState } from "react";
import apiList from "../../lib/apiList";
import { SetPopupContext } from "../../App";

const theme = createTheme();

const CreateCourse = () => {
  const [courseData, setCourseData] = useState({
    name: "",
    courseCode: "",
    description: "",
  });

  const handleChange = (key, value) => {
    setCourseData({
      ...courseData,
      [key]: value,
    });
  };

  const setPopup = createContext(SetPopupContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(courseData);
    axios
      .post(apiList.newcourse, courseData)
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
        <Box
          padding={2}
          sx={{ marginTop: 8, display: "flex", flexDirection: "column" }}
        >
          <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
            <TextField
              label="Course Name"
              margin="normal"
              fullWidth
              value={courseData.name}
              onChange={(event) => handleChange("name", event.target.value)}
            />

            <TextField
              label="Course Code"
              margin="normal"
              fullWidth
              value={courseData.courseCode}
              onChange={(event) =>
                handleChange("courseCode", event.target.value)
              }
            />

            <TextField
              label="Course Description"
              margin="normal"
              multiline
              rows={3}
              fullWidth
              value={courseData.description}
              onChange={(event) =>
                handleChange("description", event.target.value)
              }
            />

            <Button type="submit" variant="contained">
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default CreateCourse;
