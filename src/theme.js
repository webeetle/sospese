import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  '@global': {
    '.update-notification': {
      backgroundColor: '#222',
      color: '#fff',
      display: 'block',
      position: 'fixed',
      zIndex: 1000,
      bottom: 0,
      right: 0,
      padding: '0.8em 1.2em',
      textDecoration: 'none'
    }
  },
  palette: {
    primary: {
      main: '#62c79d',
      light: '#95face',
      dark: '#2c966f',
      contrastText: '#fff'
    },
    secondary: {
      main: '#404ea7',
      light: '#C5CAE9',
      dark: '#002677',
      contrastText: '#fff'
    },
    background: {
      default: '#404ea7'
    }
  },
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: 10
      }
    },
    MuiButton: {
      contained: {
        borderRadius: 8,
        boxShadow: 'none'
      }
    }
  }
})
export { theme }
