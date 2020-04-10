import { types } from 'mobx-state-tree'
import { HomeStore } from './home.store'

const PagesStore = types.model('PagesStore', {
  home: HomeStore
})

export { PagesStore }
