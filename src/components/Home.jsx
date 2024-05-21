import { Button, Grid, Typography } from "@mui/material";
import isAuth, { userRole } from "../lib/isAuth";
import Student from "../pages/Student";
import Admin from "../pages/Admin";
import Facilitator from "../pages/Facilitator";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = (location) => {
    navigate(location);
  };
  return (
    <Grid container padding={20}>
      {isAuth() ? (
        userRole() === "student" ? (
          <Student />
        ) : userRole() === "facilitator" ? (
          <Facilitator />
        ) : (
          <Admin />
        )
      ) : (
        <Grid item>
          <Typography>Please login to Access your page</Typography>
          <Button onClick={() => handleClick("/login")}>Login</Button>
        </Grid>
      )}
    </Grid>
  );
};
