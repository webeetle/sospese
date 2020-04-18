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
    color: '#757575',
    '& .selfie': {
      width: '100%'
    }
  },
  dropzone: {
    width: '100px!important',
    height: '100px!important',
    minHeight: '100px!important',
    backgroundColor: `${theme.palette.secondary.light}!important`,
    border: '0!important',
    borderRadius: '100%',
    display: 'flex',
    margin: '0 auto',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    '& > div > svg': {
      display: 'none!important'
    },
    '& .imgUp': {
      width: 40,
      height: 40,
      marginTop: 10,
      fill: theme.palette.secondary.main
    },
    '& input': {
      width: '100%'
    }
  },
  title: {
    fontSize: 24,
    textTransform: 'uppercase',
    color: theme.palette.primary.main,
    fontWeight: 700,
    textAlign: 'center'
  },
  subTitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 700,
    color: theme.palette.secondary.main,
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
