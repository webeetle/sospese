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
    color: '#3F51B5',
  },
  listTitle:{
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 18,
    marginBottom: 0
  },
  list:{
    'list-style-type': 'none',
    padding:0,
    textAlign: 'center',
    marginTop: 0
  }
}))
