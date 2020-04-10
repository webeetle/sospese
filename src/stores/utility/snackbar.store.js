import { types } from 'mobx-state-tree'

const SnackBarStore = types.model('SnackBarStore', {
  open: types.optional(types.boolean, false),
  message: types.maybe(types.string),
  variant: types.optional(types.string, 'info'),
  anchorOrigin: types.optional(types.maybe(types.frozen()), {
    vertical: 'top',
    horizontal: 'right'
  })
}).actions(self => ({
  feedback (variant, message) {
    self.open = true
    self.message = message
    self.variant = variant
    setTimeout(self.close, 5000)
  },
  close () {
    self.open = false
    // self.message = ''
    // self.variant = "info"
  }
}))

export { SnackBarStore }
