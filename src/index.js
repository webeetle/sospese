import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { theme } from './theme'
import { createStore } from './stores'
import { Provider } from 'mobx-react'
import Router from './router'
import ReactGA from 'react-ga'

const store = createStore()
ReactGA.initialize('UA-1091978-71')
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router/>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
