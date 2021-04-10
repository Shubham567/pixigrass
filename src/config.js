const env = process.env.REACT_APP_ENV || "dev";

const commonConfig = {
  app_name: "RaspFurryPi"
};

const envConfig = {
  dev : {
    backend_url: "http://raspberrypi.local/",
    ws_base_url: "ws://raspberrypi.local/ws"
  },
  local : {
    backend_url: "http://localhost:3030/",
    ws_base_url: "ws://localhost:3030/ws"
  },
};

const config = {...commonConfig,...envConfig[env]};
export default config;
