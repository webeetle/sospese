import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import HomePage from './pages/home/home.page'
import Template from './components/Template/template.component'
import SearchPage from './pages/search/search.page'
import MapPage from './pages/map/map.page'
import PointPage from './pages/point/id/point.page'
import ReportingPointPage from './pages/point/reporting/reportingpoint.page'
import ThanksPage from './pages/thanks/thanks.pages'

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
    },
    {
      path: '/point/reporting',
      component: ReportingPointPage
    },
    {
      path: '/point/:id',
      component: PointPage
    },
    {
      path: '/grazie',
      component: ThanksPage
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
