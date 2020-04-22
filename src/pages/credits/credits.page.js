/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { PropTypes } from 'prop-types'
import { useStyles } from './credits.style'
import { Grid, Paper, Typography } from '@material-ui/core'
import { withRouter } from 'react-router'
import { inject, observer } from 'mobx-react'

const CreditsPage = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
        <Grid container>
          <Grid item lg={3} md={2} sm={1}/>
          <Grid item lg={6} md={8} sm={10}>
            <Paper rounded className={classes.container}>
              <Typography variant={'h3'} className={classes.title}>Credits</Typography>

              <p className={classes.listTitle}>Ideatore e super programmatore del male (ma solo questa volta del bene)</p>
              <ul className={classes.list}>
                <li>Riccardo Tartaglia</li>
              </ul>

              <div style={{ textAlign: 'center' }}>
                <img src="icons/suspended-team.svg" alt="suspended team" width={120}/>
                <ul className={classes.list}>
                  <li>Angelo Capozzi</li>
                  <li>Gianluigi Catania</li>
                  <li>Davide D’Antonio</li>
                  <li>Marco Ferraioli</li>
                  <li>Paolo Parente</li>
                  <li>Riccardo Tartaglia</li>
                </ul>
              </div>

              <p className={classes.listTitle}>Cercatori di punti</p>
              <ul className={classes.list}>
                <li>Davide D’Antonio</li>
                <li>Maico Orazio</li>
                <li>Laura Vittoria</li>
              </ul>

              <p className={classes.listTitle}>Disegnini vari</p>
              <ul className={classes.list}>
                <li>Anna Grazia Longobardi</li>
              </ul>

              <p className={classes.listTitle}>Avrebbero voluto partecipare, ma dovevano fare un esame</p>
              <ul className={classes.list}>
                <li>Carmine Schettino</li>
              </ul>

              <p className={classes.listTitle}>Paroliere</p>
              <ul className={classes.list}>
                <li>Francesca Postiglione</li>
              </ul>

              <p className={classes.listTitle}>Umarell</p>
              <ul className={classes.list}>
                <li>Sabatino Piccolo</li>
              </ul>

              <p className={classes.listTitle}>Bug Hunters</p>
              <ul className={classes.list}>
                <li>Ciro Tartaglia</li>
              </ul>

              <p className={classes.listTitle}>Hrvatska verzija</p>
              <ul className={classes.list}>
                <li>Salvatore Cagnazzi</li>
              </ul>

            </Paper>
          </Grid>
        </Grid>
    </div>
  )
}

CreditsPage.propTypes = {
  history: PropTypes.object,
  store: PropTypes.object
}

export default withRouter(inject('store')(observer(CreditsPage)))
