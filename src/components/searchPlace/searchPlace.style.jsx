import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: { position: 'relative' },
  title: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    marginBottom: 20,
    fontSize: 18,
    textTransform: 'uppercase'
  },
  google: {
    width: '100%'
  },
  label: {
    margin: '20px auto',
    display: 'block'
  },
  geoButton: {
    borderRadius: 0,
    color: '#fff',
  },
  listResult: {
    position: 'absolute',
    width: '100%',
    zIndex: 2,
    background: '#fff'
  }
}))
