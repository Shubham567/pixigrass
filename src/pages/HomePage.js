import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


const HomePage = props => {

  return (
    <React.Fragment>
      <Grid container justify="center">
        <Grid item>
          <Typography variant="h1">Welcome To Your Homepage</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default HomePage;
