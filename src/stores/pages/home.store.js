import { types } from 'mobx-state-tree'

const HomeStore = types.model('HomeStore', {
  open: types.optional(types.boolean, false)
}).actions(self => ({
}))

export { HomeStore }
