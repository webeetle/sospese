import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { HomePage } from './pages/home/home.page'
import Template from './components/Template/template.component'
import { TestPage } from './pages/test/test.page'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/test',
    component: TestPage
  }
]

function Router () {
  const routeComponents = routes.map(({ path, component }, key) => <Route exact path={path} component={component}
                                                                          key={key}/>)
  return (
    <BrowserRouter>
      <Template>
        <Switch>
          {routeComponents}
        </Switch>
      </Template>
    </BrowserRouter>
  )
}

export default inject('store')(observer(Router))
