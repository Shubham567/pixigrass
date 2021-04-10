import {createMuiTheme} from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#4527a0',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    color: "#4a4a4a",
    fontSize: 13,
    fontWeightLight: 300,
    htmlFontSize: 16,
    fontWeightBold: 700,
    h1: {
      lineHeight: 1.21,
      letterSpacing: '0.05em',
    },
    h2: {
      letterSpacing: '0.05em',
    },
    button: {
      letterSpacing: '0.05em',
    },
    caption: {
      fontSize: '0.6rem',
    },
    overline: {
      letterSpacing: '0.16em',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
      },
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  props: {
    MuiAppBar: {
      color: 'transparent',
    },
  },
});
