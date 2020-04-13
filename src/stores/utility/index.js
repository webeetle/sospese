import { types } from 'mobx-state-tree'
import { SnackBarStore } from './snackbar.store'
import { LocationStore } from './location.store'

const UtilityStore = types.model('UtilityStore', {
  snackbar: SnackBarStore,
  locationStore: LocationStore
})

export { UtilityStore }
