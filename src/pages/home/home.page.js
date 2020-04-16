import React, { useEffect } from 'react'
import { useStyles } from './home.style'
import { Button, ButtonGroup, MobileStepper, Paper, Typography } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import useStepper from '../../hooks/useStepper'
import SwipeableViews from 'react-swipeable-views'
import { withRouter } from 'react-router'
import { inject, observer } from 'mobx-react'
import { PropTypes } from 'prop-types'

const HomePage = (props) => {
  const classes = useStyles()
  const carousel = useStepper({
    initial: 0,
    maxStep: 3
  })
  const { history, store: { pages: { home } } } = props

  useEffect(() => {
    home.getStats()
  }, [])

  return (
    <div className={classes.root}>

      <div className={classes.mapSection}>
        <Button
          onClick={() => history.push('/search')}
          variant={'contained'}
          startIcon={<Search/>}
        >cerca punto</Button>
      </div>

      <div className={classes.buttonSection}>
        <ButtonGroup className={'actionButton'} variant="text" color="secondary">
          <Button>ho donato</Button>
          <Button onClick={() => history.push('/point/reporting')}>segnala punto</Button>
        </ButtonGroup>
      </div>

      <div className={classes.howWorks}>
        <Typography align={'center'}><strong>COME FUNZIONA</strong></Typography>

        <div className={'containerMobileStepper'}>
          <SwipeableViews
            axis={'x'}
            index={carousel.step}
            onChangeIndex={(index) => {
              if (index > carousel.step) {
                carousel.next()
              } else {
                carousel.prev()
              }
            }}
            enableMouseEvents
          >
            <div className={'slide'}>
              <img src={'icons/map.svg'}/>
              <Typography>Vai sulla <span>mappa</span>, inserisci il tuo indirizzo oppure attiva la
                geolocalizzazione</Typography>
            </div>
            <div className={'slide'}>
              <img src={'icons/pin_status.svg'}/>
              <Typography>Trova i <span>punti di ritiro e raccolta</span></Typography>
            </div>
            <div className={'slide'}>
              <img src={'icons/heart.svg'}/>
              <Typography>raggiungi il punto con le dovute precauzioni e scegli
                di <span>donare o di ritirare</span></Typography>
            </div>
          </SwipeableViews>

          <MobileStepper
            steps={carousel.maxStep}
            position="static"
            variant="dots"
            activeStep={carousel.step}
          />
        </div>

      </div>

      <div className={classes.counters}>
        <div>
          <Typography variant={'h4'}>{home.points}</Typography>
          <Typography variant={'p'}>PUNTI SOSPESI</Typography>
        </div>
        <div>
          <Typography variant={'h4'}>{home.donations}</Typography>
          <Typography variant={'p'}>DONATORI</Typography>
        </div>
      </div>

      <div className={classes.missionSection}>
        <Paper rounded className={'paper'}>
          <Typography className={'title'} variant={'h3'} align={'center'}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <img src={'icons/cesto.svg'}/> <span>Cos'è</span>
          </Typography>
          <Typography className={'body'}>
            Sospese è un progetto che mette in contatto persone che vogliono donare con persone che hanno bisogno di
            sostegno. Un contenitore di segnalazioni di punti di raccolta e di ritiro di “cose sospese”, beni e servizi
            acquistati e lasciati a disposizione di chi ne ha bisogno.
          </Typography>
        </Paper>
        <Paper rounded className={'paper'}>
          <Typography className={'title'} variant={'h3'} align={'center'}>
            <img src={'icons/sos.svg'}/> <span>Mission</span>
          </Typography>
          <Typography className={'body'}>
            Sospese è un progetto che mette in contatto persone che vogliono donare con persone che hanno bisogno di
            sostegno. Un contenitore di segnalazioni di punti di raccolta e di ritiro di “cose sospese”, beni e servizi
            acquistati e lasciati a disposizione di chi ne ha bisogno.
          </Typography>
        </Paper>
      </div>
    </div>
  )
}

export default withRouter(inject('store')(observer(HomePage)))

HomePage.propTypes = {
  history: PropTypes.object,
  store: PropTypes.object
}
