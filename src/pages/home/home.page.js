import React, { useEffect } from 'react'
import { useStyles } from './home.style'
import { Button, ButtonGroup, Grid, Hidden, MobileStepper, Paper, Typography } from '@material-ui/core'
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
          <Button onClick={() => history.push('/donations')}>
            <div>
              <img alt={'cuore'} src={'icons/heart.svg'} width={40}/>
            </div>
            ho donato
          </Button>
          <div style={{ width: 20 }} className={'divider'}/>
          <Button onClick={() => history.push('/point/reporting')}>
            <div>
              <img alt={'bandiera'} src={'icons/flag.svg'} width={40}/>
            </div>
            segnala punto
          </Button>
        </ButtonGroup>
      </div>

      <div className={classes.howWorks}>
        <Typography align={'center'}><strong>COME FUNZIONA</strong></Typography>
        <Hidden smUp>
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
                <img alt={'mappa'} src={'icons/map.svg'}/>
                <Typography>Vai sulla <span>mappa</span>, inserisci il tuo indirizzo oppure attiva la
                  geolocalizzazione</Typography>
              </div>
              <div className={'slide'}>
                <img alt={'status'} src={'icons/pin_status.svg'}/>
                <Typography>Trova i <span>punti di ritiro e raccolta</span></Typography>
              </div>
              <div className={'slide'}>
                <img alt={'donare'} src={'icons/donare_ritirare.svg'}/>
                <Typography>Raggiungi il punto con le dovute precauzioni e scegli
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
        </Hidden>
        <Hidden xsDown>
          <div className={'containerMobileStepper'}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <Paper className={'paper'} style={{ height: '100%' }}>
                  <div className={`${classes.containerBox} slide`}>
                    <div className={'alignment'}>
                      <img alt={'mappa'} src={'icons/map.svg'} width={60}/>
                    </div>
                    <Typography>Vai sulla <span>mappa</span>, inserisci il tuo indirizzo oppure attiva
                      la
                      geolocalizzazione</Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <Paper className={'paper'} style={{ height: '100%' }}>
                  <div className={`${classes.containerBox} slide`}>
                    <div className={'alignment'}>
                      <img alt={'status'} src={'icons/pin_status.svg'} width={60}/>
                    </div>
                    <Typography>Trova i <span>punti di ritiro e raccolta</span></Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <Paper className={'paper'} style={{ height: '100%' }}>
                  <div className={`${classes.containerBox} slide`}>
                    <div className={'alignment'}>
                      <img alt={'cuore'} src={'icons/heart.svg'} width={60}/>
                    </div>
                    <Typography>Raggiungi il punto con le dovute precauzioni e scegli
                      di <span>donare o di ritirare</span></Typography>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </Hidden>
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

      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className={classes.missionSection}>
            <Paper rounded className={'paper'}>
              <Typography className={'title'} variant={'h3'} align={'center'}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <img alt={'cesto'} src={'icons/cesto.svg'}/> <span>Cos'è</span>
              </Typography>
              <Typography className={'body'}>
                Sospese è un progetto che mette in contatto persone che vogliono donare con persone che hanno bisogno di
                sostegno. Un contenitore di segnalazioni di punti di raccolta e di ritiro di “cose sospese”, beni e
                servizi
                acquistati e lasciati a disposizione di chi ne ha bisogno.
              </Typography>
            </Paper>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className={classes.missionSection}>
            <Paper rounded className={'paper'}>
              <Typography className={'title'} variant={'h3'} align={'center'}>
                <img alt={'sos'} src={'icons/sos.svg'}/> <span>Mission</span>
              </Typography>
              <Typography className={'body'}>
                Sospese è un progetto che mette in contatto persone che vogliono donare con persone che hanno bisogno di
                sostegno. Un contenitore di segnalazioni di punti di raccolta e di ritiro di “cose sospese”, beni e
                servizi
                acquistati e lasciati a disposizione di chi ne ha bisogno.
              </Typography>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default withRouter(inject('store')(observer(HomePage)))

HomePage.propTypes = {
  history: PropTypes.object,
  store: PropTypes.object
}
