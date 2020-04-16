import { types } from 'mobx-state-tree'
import { HomeStore } from './home.store'
import { MapStore } from './map.store'
import { PointStore } from './point.store'

const PagesStore = types.model('PagesStore', {
  home: HomeStore,
  map: MapStore,
  point: PointStore
})

export { PagesStore }
