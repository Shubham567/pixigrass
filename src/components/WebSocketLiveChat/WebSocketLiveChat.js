import React, {useCallback, useEffect, useRef, useState} from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import {Button, CardActions, IconButton, TextField} from "@material-ui/core";
import {Send} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import config from "../../config";
import {v4 as uuidV4} from "uuid";
import ChatMessage from "./ChatMessage";

const WebSocketLiveChat = props => {

  const [isSocketOpen,setSocketOpen] = useState(false);
  const [messages,setMessages] = useState([]);
  const wsConn = useRef(null);
  const realMessage = useRef([]);

  const onMessage = messages => {
    return (e) => {
      const data = JSON.parse(e.data);
      if (data?.type) {
        console.log([...messages, data], messages, data);
        setMessages([...messages, data]);
        realMessage.current.push(data);
      }
    };
  }

  useEffect(() => {
    console.debug(config.ws_base_url);
    const sockOpen = () => {
      setSocketOpen(true);
    };
    if(!wsConn.current) {
      wsConn.current = new WebSocket(new URL(config.ws_base_url + "/broadcast"));
      wsConn.current?.addEventListener("open", sockOpen);
    }
    wsConn.current?.addEventListener("message", onMessage(messages));

    return() => {
      wsConn.current?.removeEventListener("open",sockOpen);
      wsConn.current?.removeEventListener("message",onMessage(messages));
    }
  },[messages]);

  const onSend = useCallback((e) => {
    e.preventDefault();
    let msg = e.target["chat"].value.trim();
    if(msg.length > 0) {
      wsConn.current.send(JSON.stringify({
        type: "message",
        message: msg,
        id: uuidV4()
      }))
    }
    e.target["chat"].value = "";
  },[]);

  return <Grid container style={{minWidth: 500}}>
    <Grid item>
      <Card>
        <CardHeader title={"Local Chat"}/>
        <CardContent>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="body2">
                {isSocketOpen ? "Connected" : "Not Connected" }
              </Typography>
            </Grid>
            <Grid item>
              <div style={{height: 400, overflowY: "scroll"}}>
                <Grid container direction="column" spacing={2}>
                  {
                    messages.map(m => <Grid item key={m.id}>
                      <ChatMessage message={m.message} />
                    </Grid>)
                  }
                </Grid>
              </div>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <form onSubmit={onSend}>
            <TextField  placeholder="Send A Message"
                        InputProps={{endAdornment: <IconButton type="submit"><Send /></IconButton>}}
                        name="chat"
            />
          </form>
        </CardActions>
      </Card>
    </Grid>
  </Grid>
}

export default WebSocketLiveChat;
