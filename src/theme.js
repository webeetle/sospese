import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#62c79d',
      light: '#95face',
      dark: '#2c966f',
      contrastText: '#000'
    },
    secondary: {
      main: '#404ea7',
      light: '#747ad9',
      dark: '#002677',
      contrastText: '#fff'
    }
  }
})
export { theme }
