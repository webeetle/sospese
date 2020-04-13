import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiDialog-paper': {
      background: '#EFF7FF',
      color: theme.palette.secondary.main,
    }
  },
  appBar: {
    background: theme.palette.secondary.main,
    color: '#fff',
    position: 'relative'
  },
  title: {}
}))
