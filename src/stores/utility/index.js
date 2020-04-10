import { types } from 'mobx-state-tree'
import { SnackBarStore } from './snackbar.store'

const UtilityStore = types.model('UtilityStore', {
  snackbar: SnackBarStore
})

export { UtilityStore }
