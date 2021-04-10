import React from "react";
import Grid from "@material-ui/core/Grid";
import WebSocketLiveChat from "../components/WebSocketLiveChat/WebSocketLiveChat";


const HomePage = props => {

  return (
    <React.Fragment>
      <Grid container justify="center">
        <Grid item>
          <div style={{minWidth: 500}}>
            <WebSocketLiveChat />
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default HomePage;
