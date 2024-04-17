import { TextField, Button, Grid } from "@mui/material";

export default function Register() {
  return (
    <form>
      <Grid
        direction="column"
        container
        spacing={4}
        alignItems="center"
        padding={4}
      >
        <Grid item>
          <TextField placeholder="First Name" label="First Name" />
        </Grid>
        <Grid item>
          <TextField placeholder="Last Name" label="Last Name" fullWidth />
        </Grid>
        <Grid item>
          <TextField type="password" label="Password" />
        </Grid>

        <Grid item>
          <Button type="submit" variant="contained">
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
