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
    <Grid container item>
      {users.length > 0 ? (
        users.map((obj) => {
          <Grid item>{obj.user_name}</Grid>;
        })
      ) : (
        <Typography>Users not found</Typography>
      )}
    </Grid>
  );
};

export default Home;
