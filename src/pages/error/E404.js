import React from "react";
import Grid from "@material-ui/core/Grid";
import {Error} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";


const PageSpinner = () =>
  <Grid container justify="center" alignItems="center" direction="column" style={{minHeight: "100vh"}}>
    <Grid item>
      <Grid container alignItems="center">
        <Grid item>
          <Error style={{fontSize: 55}}/> &nbsp;
        </Grid>
        <Grid item>
          <Typography variant="h2">
            404 : Page Not Found
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>

export default PageSpinner;
