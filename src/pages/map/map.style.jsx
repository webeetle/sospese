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
  },
  listItem: {
    marginBottom: 0,
    padding: 0,
    '& > ul': {
      padding: 0,
      margin: 0
    },
    '& hr': { margin: 0 }
  },
  item: {
    padding: '15px',
    '& .title': {
      color: theme.palette.secondary.main,
      fontWeight: 700
    },
    '& .distance': {
      color: '#a9a9a9',
      fontSize: '.9em',
      marginBottom: 10
    },
    '& .address, & .contacts': {
      fontSize: '.9em',
    }
  }
}))
