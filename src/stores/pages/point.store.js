import { types } from 'mobx-state-tree'

const PointStore = types.model('PointStore', {
  point: types.maybe(types.frozen({}))
}).actions(self => ({
  setPoint (point) {
    self.point = point
  }
}))

export { PointStore }
