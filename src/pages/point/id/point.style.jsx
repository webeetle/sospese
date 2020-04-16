import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {},
  titlePage: {
    background: '#FFF',
    color: theme.palette.secondary.main,
    fontWeight: 700,
    padding: '10px 20px'
  },
  imgHighlights: {
    height: '30vh',
    position: 'relative',
    backgroundSize: 'cover!important',
    backgroundRepeat: 'no-repeat!important'
  },
  donationCount: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    fontWeight: 700,
    bottom: 0,
    minHeight: 50,
    width: '100%',
    backgroundColor: 'rgba(98, 199, 157, .5)'
  },
  detail: {
    padding: '10px 30px 30px 30px',
    '& .icon': { width: '100%' },
    '& .title': {
      color: '#fff',
      fontWeight: 700
    },
    '& .distance': { color: '#fff' },
    '& > .paper': {
      fontSize: '.8em',
      marginTop: 10,
      padding: 30,
      color: '#757575',
      '& > .body': {
        lineHeight: '1.2em',
        fontSize: '16px',
        marginTop: 20
      },
      '& > .title': {
        fontWeight: 700,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.secondary.main,
        fontSize: 30,
        '& > span': {
          marginLeft: 10
        }
      }
    }
  },
  noteTitle: {
    marginTop: 20,
    color: theme.palette.secondary.main
  },
  notes: {
    fontSize: '1em',
    border: '1px solid #e6e6e6',
    padding: 5
  },
  likes: {
    background: theme.palette.primary.main,
    color: '#fff',
    display: 'flex',
    '& .MuiIconButton-root':{
      color: '#fff'
    },
    '& > div': {
      flex: 1,
      padding: 10,
      textAlign: 'center'
    },
    '& > div:nth-child(1)': {
      backgroundColor: '#98C367',
      borderRight: `1px solid ${theme.palette.secondary.main}`
    },
    '& > div:nth-child(2)': {
      backgroundColor: '#C76262',
      borderLeft: `1px solid ${theme.palette.secondary.main}`
    }
  }
}))
