import { types } from 'mobx-state-tree'
import axios from 'axios'
import { constants } from '../../constants'

const PointStore = types.model('PointStore', {
  point: types.maybe(types.frozen({})),
  selfie: types.maybe(types.optional(types.union(types.null, types.string), null))
}).actions(self => ({
  setPoint (point) {
    self.point = point
  },
  getPoint (id, force = false, callback = () => {
  }) {
    if (Object.keys(self.point).length === 0 || force) {
      axios.get(`${constants.api}/points/${id}`)
        .then(({ data }) => {
          self.setPoint(data)
          callback(self.point)
        })
        .catch(console.log)
    } else {
      callback(self.point)
    }
  },
  reportingPoint (point, callback) {
    axios.post(`${constants.api}/points/report`, point).then(callback)
  },
  vote (vote, callback) {
    axios.post(`${constants.api}/points/vote/${self.point._id}`, vote).then(({ data }) => {
      let aVote = JSON.parse(localStorage.getItem('vote'))
      if (!aVote) {
        aVote = {}
      }
      aVote[self.point._id] = true
      localStorage.setItem('vote', JSON.stringify(aVote))
      callback()
    })
  },
  setSelfie (selfie) {
    self.selfie = selfie
  },
  setFrozenFile (frozenFile) {
    self.frozenFile = frozenFile
  },
  saveDonation (values, callback = () => {
  }) {
    const id = values._id
    delete values._id
    self.donation = values
    axios.post(`${constants.api}/points/donation/${id}`, values).then(({ data }) => {
      callback()
    })
  },
  shareDonation () {
    navigator.share({
      files: self.frozenFile ? [self.frozenFile] : [],
      text: (self.donation && self.donation.message) ? self.donation.message + ' #selfiesospeso #sospese' : '#selfiesospeso #sospese Ho appena donato su: ',
      url: 'https://sospese.io'
    })
    self.donation = null
    self.file = null
    self.frozenFile = null
  }
}))

export { PointStore }
