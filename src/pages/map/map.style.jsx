import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    background: '#fff'
  },
  titlePage: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    padding: '10px 20px'
  },
  map: {
    height: '30vh',
    width: '100vw'
  }
}))
