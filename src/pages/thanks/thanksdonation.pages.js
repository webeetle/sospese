import React, { useEffect } from 'react'
import { useStyles } from './thanks.style'
import { Button, Grid, Paper, Typography } from '@material-ui/core'
import { withRouter } from 'react-router'
import { PropTypes } from 'prop-types'
import { inject, observer } from 'mobx-react'

const ThanksDonationPage = (props) => {
  const classes = useStyles()
  const { history, store: { pages: { point: pointStore } } } = props

  useEffect(() => {
    if (Object.keys(pointStore.point).length === 0) {
      history.push('/search')
    }
  }, [])

  return (
    <div className={classes.root}>
      <img src={'/grazie.svg'}/>
      <Paper rounded className={classes.container}>
        <Typography className={classes.title}>GRAZIE PER LA DONAZIONE!</Typography>
        <Grid container>
          <Grid style={{
            marginBottom: 20,
            textAlign: 'center'
          }} xs={12} item>{navigator.share
            ? <Button variant={'contained'} color={'secondary'} onClick={() => {
              pointStore.shareDonation()
            }}>Condividi</Button> : null}</Grid>
          <Grid item xs={12} className={classes.submit}>
            <Button color={'primary'} size={'small'} variant={'contained'} onClick={() => history.push('/')}>Vai in
              home</Button>
          </Grid>
        </Grid>

      </Paper>
    </div>
  )
}

export default withRouter(inject('store')(observer(ThanksDonationPage)))

ThanksDonationPage.propTypes = {
  history: PropTypes.object,
  store: PropTypes.object
}
