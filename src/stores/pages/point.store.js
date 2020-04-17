import { types } from 'mobx-state-tree'
import axios from 'axios'
import { constants } from '../../constants'

const PointStore = types.model('PointStore', {
  point: types.maybe(types.frozen({}))
}).actions(self => ({
  setPoint (point) {
    self.point = point
  },
  getPoint (id) {
    if (Object.keys(self.point).length === 0) {
      axios.get(`${constants.api}/points/${id}`)
        .then(({ data }) => {
          self.setPoint(data)
        })
        .catch(console.log)
    }
  },
  reportingPoint (point, callback) {
    axios.post(`${constants.api}/points/report`, point).then(callback)
  }
}))

export { PointStore }
