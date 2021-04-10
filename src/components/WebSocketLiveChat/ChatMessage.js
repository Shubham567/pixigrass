import React from "react";
import {Card, CardContent, Typography} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";

const ChatMessage = props => {
  return <Card>
    {
      props.sender && <CardHeader title={props.sender}/>
    }
    <CardContent>
      <Typography variant="body1">
        {
          props.message
        }
      </Typography>
    </CardContent>
  </Card>
}

export default ChatMessage;
