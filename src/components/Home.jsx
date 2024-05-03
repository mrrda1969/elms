import { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Typography } from "@mui/material";
import apiList from "../lib/apiList";

const Home = () => {
  useEffect(() => {
    getData();
  }, []);

  const [users, setUsers] = useState([]);

  const getData = () => {
    axios
      .get(apiList.users)
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    // map users obtained from the api call
    <Grid container direction="column" spacing={2} padding={2}>
      <Typography>Users</Typography>
      {users.length > 0 ? (
        users.map((user, _id) => (
          <Grid item key={_id}>
            <Typography>
              {user.username} {user.role}
            </Typography>
          </Grid>
        ))
      ) : (
        <Typography>Users not found</Typography>
      )}
    </Grid>
  );
};

export default Home;
