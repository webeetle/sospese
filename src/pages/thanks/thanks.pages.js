import React from 'react'
import { useStyles } from './thanks.style'
import { withRouter } from 'react-router'
import { inject, observer } from 'mobx-react'
import { PropTypes } from 'prop-types'
import { Button, Grid, Paper, Typography } from '@material-ui/core'

const ThanksPage = (props) => {
  const classes = useStyles()
  const { history } = props

  return (
    <div className={classes.root}>
      <img alt={'grazie'} src={'/grazie.svg'}/>
      <Paper rounded className={classes.container}>
        <Typography className={classes.title}>GRAZIE PER LA SEGNALAZIONE!</Typography>
        <Grid container>
          <Grid item xs={12} className={classes.submit}>
            <Button color={'primary'} size={'small'} variant={'contained'} onClick={() => history.push('/')}>Vai in home</Button>
            <Button color={'secondary'} size={'small'} variant={'contained'} onClick={() => history.push('/point/reporting')}>Segnala altro</Button>
          </Grid>
        </Grid>

      </Paper>
    </div>
  )
}

export default withRouter(inject('store')(observer(ThanksPage)))

ThanksPage.propTypes = {
  history: PropTypes.object,
  store: PropTypes.object
}
