import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
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
