import { types } from 'mobx-state-tree'
import axios from 'axios'
import { constants } from '../../constants'

const TypePointStore = types.model('TypePointStore', {
  categories: types.maybe(types.array(types.frozen({})))
}).actions(self => ({
  setCategories (categories) {
    const newCategories = []
    categories.map(cat => {
      const item = {
        label: cat.name.toUpperCase(),
        value: cat.name
      }
      newCategories.push(item)
    })
    self.categories = newCategories
  },
  getCategories () {
    if (!Array.isArray(self.categories) || self.categories.length === 0) {
      axios.get(`${constants.api}/categories`).then(({ data }) => self.setCategories(data))
    }
  }
}))

export { TypePointStore }
