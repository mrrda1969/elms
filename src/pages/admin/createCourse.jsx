import {
  Box,
  Container,
  createTheme,
  TextField,
  Button,
  Input,
} from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import axios from "axios";
import { useContext, useState } from "react";
import apiList from "../../lib/apiList";
import { SetPopupContext } from "../../App";

const theme = createTheme();

const CreateCourse = () => {
  const [avatar, setAvatar] = useState(null);

  const [name, SetName] = useState("");

  const [courseCode, setCourseCode] = useState("");

  const [description, setDescription] = useState("");

  const courseData = new FormData();

  courseData.append("name", name);

  courseData.append("courseCode", courseCode);

  courseData.append("image", avatar);

  courseData.append("description", description);

  const setPopup = useContext(SetPopupContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(apiList.newcourse, courseData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
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
    // console.log(courseData);
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
              value={name}
              onChange={(event) => SetName(event.target.value)}
            />

            <TextField
              label="Course Code"
              margin="normal"
              fullWidth
              value={courseCode}
              onChange={(event) => setCourseCode(event.target.value)}
            />

            <TextField
              label="Course Description"
              margin="normal"
              multiline
              rows={3}
              fullWidth
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />

            <Input
              type="file"
              onChange={(e) => setAvatar(e.target.files[0])}
              aria-label="Course Image"
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
