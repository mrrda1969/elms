import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../lib/apiList";
import { username } from "../lib/isAuth";

const theme = createTheme();

const user = username();

const Facilitator = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`${server}/courses/${user}/mycourses`)
      .then((response) => {
        console.log(response);
        setCourses(response.data.courses);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Grid container spacing={2} xs={12}>
          {courses.map((course) => (
            <Grid item key={course._id} xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia component="img" height="140" image="/src/img/card_img.jpg" alt={course.name} />
                  <CardContent
                    sx={{
                      height: 120,
                    }}
                  >
                    <Typography component="p" variant="h6">
                      {course.name} - {course.courseCode}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Facilitator;
