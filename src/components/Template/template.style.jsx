import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh',
    width: '100%',
    background: theme.palette.secondary.main
  },
  toolbar: {
    color: '#fff',
    padding: '25px 20px'
  },
  menuButton: {
    position: 'absolute',
    top: 10
  },
  logo: {
    height: 35,
    paddingLeft: 10,
    flex: 1
  },
  menuContainer: {
    width: '100vw',
    paddingTop: 25
  },
  closeMenuButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: theme.palette.secondary.main
  },
  listMenu: {
    marginTop: 30
  },
  listMenuText: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    textTransform: 'uppercase',
    textAlign: 'center'
  }
}))
