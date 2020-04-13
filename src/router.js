import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import HomePage from './pages/home/home.page'
import Template from './components/Template/template.component'
import SearchPage from './pages/search/search.page'
import MapPage from './pages/map/map.page'

function Router (props) {
  const routes = [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/search',
      component: SearchPage
    },
    {
      path: '/map',
      component: MapPage
    }
  ]

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
