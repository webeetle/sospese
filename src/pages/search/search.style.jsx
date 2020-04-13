import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    padding: 30,
    justifyContent: 'center',
    background: '#EFF7FF',
    minHeight: 'calc(100vh - 382px)'
  }
}))
