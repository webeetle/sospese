import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    fontSize: '30px',
    color: theme.palette.primary.main,
    textAlign: 'center',
    fontWeight: 700
  },
  container: {
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
  }
}))
