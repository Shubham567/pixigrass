import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const PageSpinner = () =>
  <Grid container justify="center" alignItems="center" style={{minHeight: "100vh"}}>
    <Grid item>
      <CircularProgress />
    </Grid>
  </Grid>

export default PageSpinner;
