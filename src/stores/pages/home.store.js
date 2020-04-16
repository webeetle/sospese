import { types } from 'mobx-state-tree'
import axios from 'axios'
import { constants } from '../../constants'

const HomeStore = types.model('HomeStore', {
  donations: types.maybe(types.number),
  points: types.maybe(types.number)
}).actions(self => ({
  successStats ({ data }) {
    self.donations = data.donations
    self.points = data.points
  },
  getStats () {
    axios.get(`${constants.api}/points/stats`)
      .then(self.successStats)
      .catch(console.log)
    /* return {
      points: 134,
      donations: 65
    } */
  }
}))

export { HomeStore }
