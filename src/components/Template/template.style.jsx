import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    background: theme.palette.secondary.main,
    paddingTop: 104,
    overflowX: 'hidden'
  },
  toolbar: {
    color: '#fff',
    padding: '20px'
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  logoContainer: {
    flex: 1,
    flexFlow: 'row',
    textAlign: 'center',
    '& > p': {
      fontWeight: 700
    }
  },
  logo: {
    height: 35,
    paddingLeft: 10
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
  },
  footer: {
    background: theme.palette.primary.main,
    color: '#fff',
    padding: '30px 30px 10px 30px',
    textAlign: 'center',
    '& a': {
      color: theme.palette.secondary.main,
      textDecoration: 'none'
    },
    '& > .grazie': {
      fontSize: '30px',
      fontWeight: 700,
      textTransform: 'uppercase'
    },
    '& > .andratuttobene': {
      fontSize: '18px',
      fontWeight: 700,
      textTransform: 'uppercase'
    },
    '& > .copyright': {
      marginTop: 50,
      fontSize: '14px'
    }
  }
}))
