import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import apiList from "../lib/apiList";
import { SetPopupContext } from "../App";

const Admin = () => {
  useEffect(() => {
    getData();
  }, []);

  const [menuValues, setMenuValues] = useState([]);

  const setPopup = useContext(SetPopupContext);

  const getData = () => {
    axios
      .get(apiList.courses)
      .then((response) => {
        setMenuValues(response.data);
      })
      .catch((err) => {
        setPopup({
          open: true,
          message: "Error fetching data",
          err,
          severity: "error",
        });
      });
  };

  const [formData, setFormData] = useState({
    staffId: "",
    courseCode: "",
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(apiList.newcourse, formData)
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

  return (
    <Grid container justifyContent="center">
      <form onSubmit={handleSubmit}>
        <Grid container item spacing={2} direction="column">
          <Grid item>
            <Typography>Assign a course to a facilitator</Typography>
          </Grid>

          <Grid item>
            <TextField
              label="Facilitator ID"
              value={formData.staffId}
              onChange={(event) => handleChange("staffId", event.target.value)}
            />
          </Grid>

          <Grid item>
            <TextField
              select
              label="Course"
              value={formData.courseCode}
              onChange={(event) =>
                handleChange("courseCode", event.target.value)
              }
            >
              {menuValues.map((menuValue, courseCode) => (
                <MenuItem key={courseCode} value={menuValue.courseCode}>
                  {menuValue.name} - {menuValue.courseCode}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <Button type="submit">Assign</Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default Admin;
