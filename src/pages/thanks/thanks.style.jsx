import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 382px)'
  },
  container: {
    position: 'relative',
    margin: '15px 30px',
    padding: 15,
    color: '#757575'
  },
  title: {
    fontSize: 24,
    textTransform: 'uppercase',
    color: theme.palette.primary.main,
    fontWeight: 700,
    textAlign: 'center'
  },
  submit: {
    marginTop: 20,
    textAlign: 'right',
    '& > button': {
      margin: '0 5px',
      fontWeight: 700
    }
  },
}))
