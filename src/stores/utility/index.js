import { types } from 'mobx-state-tree'
import { SnackBarStore } from './snackbar.store'
import { TypePointStore } from './typePoint.store'

const UtilityStore = types.model('UtilityStore', {
  snackbar: SnackBarStore,
  typePoint: TypePointStore
})

export { UtilityStore }
