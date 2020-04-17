import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    fontSize: '24px',
    color: theme.palette.primary.main,
    textAlign: 'center',
    fontWeight: 700
  },
  container: {
    position: 'relative',
    margin: '15px 30px',
    padding: 30,
    color: '#757575',
  },
  submit: {
    textAlign: 'right',
    '& > button': {
      margin: '0 5px',
      fontWeight: 700
    }
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
    zIndex: 2,
    width: 'calc(100% - 60px)',
    border: `1px solid ${theme.palette.primary.main}`,
    background: '#fff'
  }
}))
