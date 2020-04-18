import { types } from 'mobx-state-tree'
import axios from 'axios'
import { constants } from '../../constants'

const MapStore = types.model('MapStore', {
  lat: types.maybe(types.number),
  lng: types.maybe(types.number),
  points: types.maybe(types.optional(types.array(types.frozen({})), []))
}).actions(self => ({
  successNearPoints ({ data }) {
    self.points = data
  },
  getNearPoints () {
    axios.post(`${constants.api}/points/near`, {
      lat: self.lat,
      lng: self.lng,
      distance: 5000
    })
      .then(self.successNearPoints)
      .catch(console.log)
  },
  setLocations ({ lat, lng }) {
    self.lat = lat
    self.lng = lng
  }
}))

export { MapStore }
