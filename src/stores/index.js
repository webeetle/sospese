import { types } from 'mobx-state-tree'
import { UtilityStore } from './utility'
import { PagesStore } from './pages'

const Store = types.model('Store', {
  pages: PagesStore,
  utility: UtilityStore
})

const createStore = (objToInject) => {
  return Store.create({
    utility: {
      snackbar: {},
      locationStore: {}
    },
    pages: {
      home: {},
      point: {},
      map: {}
    }
  }, objToInject)
}

export { createStore }
