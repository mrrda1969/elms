import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import isAuth, { userRole } from "../lib/isAuth";

const Navbar = () => {
  let navigate = useNavigate();

  const handleClick = (location) => {
    navigate(location);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" flexGrow={1}>
            Fundo
          </Typography>
          {isAuth() ? (
            userRole() === "student" ? (
              <>
                <Button color="inherit">Home</Button>
                <Button color="inherit">My Courses</Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  Logout
                </Button>
              </>
            ) : userRole() === "facilitator" ? (
              <>
                <Button color="inherit">My Courses</Button>
                <Button color="inherit">My Students</Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit">Manage Users</Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  Logout
                </Button>
              </>
            )
          ) : (
            <>
              <Button
                color="inherit"
                sx={{ textTransform: "none" }}
                onClick={() => handleClick("/login")}
              >
                Login
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
