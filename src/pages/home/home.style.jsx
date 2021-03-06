import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {},
  mapSection: {
    height: '30vh',
    backgroundImage: 'url(\'map.svg\')',
    backgroundRepeat: 'none',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiButton-root.MuiButton-contained': {
      border: `3px solid ${theme.palette.secondary.light}`,
      borderRadius: 30,
      padding: '8px 20px',
      color: theme.palette.secondary.main,
      fontWeight: 700,
      background: '#fff'
    }
  },
  buttonSection: {
    flex: 1,
    justifyContent: 'center',
    display: 'flex',

    [theme.breakpoints.up('sm')]: {
      'margin-top': '-40px',
    },
    '& > .actionButton': {
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '600px',
      },
      '& .MuiButton-root': {
        background: '#fff',
        flex: 1,
        fontWeight: 700,
        padding: '15px 0',
        [theme.breakpoints.up('sm')]: {
          padding: 7,
          'border-radius': 50,
          border: '3px solid #C5CAE9',
        }
      },
      '& .MuiButton-label': {
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
      },
      '& .divider': {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          'border-right': 'unset',
          display: 'block'
        }
      }
    }
  },
  howWorks: {
    padding: '30px',
    color: '#fff',
    '& > .containerMobileStepper': {
      marginTop: 20,
    },
    '& > .containerMobileStepper .slide': {
      color: theme.palette.secondary.main,
      minHeight: 220,
      background: '#fff',
      padding: '35px 15px',
      textAlign: 'center',
      '& > p': {
        marginTop: 20,
        textTransform: 'uppercase',
        fontWeight: 700,
        '& > span': {
          color: theme.palette.primary.main
        }
      },
      '& > img': {
        height: 50
      }
    },
    '& > .containerMobileStepper .MuiMobileStepper-root': {
      justifyContent: 'center',
      background: '#fff'
    }
  },
  counters: {
    background: theme.palette.primary.main,
    color: '#fff',
    display: 'flex',
    '& > div': {
      flex: 1,
      padding: 20,
      textAlign: 'center'
    },
    '& > div:nth-child(1)': {
      borderRight: `1px solid ${theme.palette.secondary.main}`
    },
    '& > div:nth-child(2)': {
      borderLeft: `1px solid ${theme.palette.secondary.main}`
    }
  },
  missionSection: {
    padding: 30,
    '& > .paper': {
      // marginBottom: 20,
      padding: 30,
      '& > .body': {
        color: '#757575',
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

  containerBox: {
    padding: 30,
    '& > .body': {
      color: '#757575',
      lineHeight: '1.2em',
      fontSize: '16px',
      marginTop: 20,
    },
    '& > .alignment': {
      textAlign: 'center'
    },
    '& > .paper': {
      marginBottom: 20,
      padding: 30,
      // '& > .title': {
      //   fontWeight: 700,
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   color: theme.palette.secondary.main,
      //   fontSize: 30,
      //   '& > span': {
      //     marginLeft: 10
      //   }
      // }
    }
  }
}))
