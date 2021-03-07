import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3D2563',
    },
    secondary: {
      main: '#6CC3C6',
      contrastText: '#ffffff',
    },
  },
});

theme.props = {
  MuiButton: {
    disableElevation: true,
  },
};

theme.overrides = {
  MuiButton: {
    root: {
      borderRadius: '50px',
      textTransform: 'none',
      padding: '10px 60px',
      width: '300px',
    },
    containedPrimary: {
      '&:hover': {
        backgroundColor: '#2e1c4a',
      },
    },
    containedSecondary: {
      '&:hover': {
        backgroundColor: '#579ea1',
      },
    },
  },
};
export default theme;
