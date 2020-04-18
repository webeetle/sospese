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
  dropzone: {
    width: '100px!important',
    height: '100px!important',
    minHeight: '100px!important',
    backgroundColor: `${theme.palette.secondary.main}!important`,
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
      width: 50,
      height: 50,
      fill: '#FFF'
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
  submit: {
    marginTop: 20,
    textAlign: 'right',
    '& > button': {
      margin: '0 5px',
      fontWeight: 700
    }
  },
}))
