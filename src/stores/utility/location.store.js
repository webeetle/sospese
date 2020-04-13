import { types } from 'mobx-state-tree'

const LocationStore = types.model('LocationStore', {
  lat: types.maybe(types.number),
  lng: types.maybe(types.number)
}).actions(self => ({
  setLocations ({ lat, lng }) {
    self.lat = lat
    self.lng = lng
  }
}))

export { LocationStore }
