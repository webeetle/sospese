import React, { useEffect } from 'react'
import { useStyles } from './point.style'
import { Button, Grid, IconButton, Paper, Typography } from '@material-ui/core'
import { ThumbDown, ThumbUp } from '@material-ui/icons'
import { PropTypes } from 'prop-types'
import { withRouter } from 'react-router'
import { inject, observer } from 'mobx-react'
import { getPointIcon } from '../../../utils/point.utils'
import { constants } from '../../../constants'

const PointPage = (props) => {
  const classes = useStyles()
  const { history, match, store: { pages: { point: pointStore } } } = props

  const thumbDisabled = () => {
    if (localStorage.getItem('vote')) {
      const aVote = JSON.parse(localStorage.getItem('vote'))
      return !!(aVote[pointStore.point._id])
    } else {
      return false
    }
  }

  useEffect(() => {
    pointStore.getPoint(match.params.id)
  }, [])

  const src = pointStore.point.pointType ? getPointIcon(pointStore.point.pointType) : ''

  return (
    <div className={classes.root}>
      <Typography variant={'h6'} className={classes.titlePage} onClick={() => history.push('/map')}>Ritorna ai punti
        Sospesi</Typography>
      <div className={classes.imgHighlights}
           style={{ background: `url('https://maps.googleapis.com/maps/api/streetview?size=800x800&location=${pointStore.point.address}&key=${constants.googleAPIKey}')` }}>
        <div className={classes.donationCount}>
          <Grid container alignItems={'center'} spacing={2}>
            <Grid item xs={1}/>
            <Grid item xs={2}>
              <img src={'/icons/heart_w.svg'}/>
            </Grid>
            <Grid item xs={4}>{pointStore.point.totalDonations} Donazioni Raggiunte</Grid>
            <Grid item xs={4}><Button fullWidth size={'small'} variant={'contained'} color={'secondary'}>Ho
              Donato</Button></Grid>
          </Grid>
        </div>
      </div>
      <div className={classes.detail}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <img src={src} className={'icon'}/>
          </Grid>
          <Grid item xs={10}>
            <Typography className={'title'}>{pointStore.point.name}</Typography>
            {pointStore.point.dist
              ? <Typography
                className={'distance'}>Distanza: {(pointStore.point.dist.calculated / 1000).toFixed(2)} KM</Typography>
              : null}
          </Grid>
        </Grid>
        <Paper rounded className={'paper'}>
          <Typography className={'address'}>{pointStore.point.address}</Typography>
          <Typography
            className={'contacts'}>Contatti: {pointStore.point.contacts ? pointStore.point.contacts.join(' - ') : ''}</Typography>
          <Typography className={classes.noteTitle}>Note</Typography>
          <div className={classes.notes}>
            {pointStore.point.note}
          </div>
        </Paper>
      </div>
      <div className={classes.likes}>
        <div>
          <Typography variant={'h4'}><IconButton disabled={thumbDisabled()} onClick={() => {
            pointStore.vote({ type: 'up' }, () => {
              pointStore.getPoint(match.params.id, true)
            })
          }}><ThumbUp/></IconButton></Typography>
          <Typography variant={'p'}>{pointStore.point.thumbsUp} CONFERME</Typography>
        </div>
        <div>
          <Typography variant={'h4'}><IconButton disabled={thumbDisabled()} onClick={() => {
            pointStore.vote({ type: 'down' }, () => {
              pointStore.getPoint(match.params.id, true)
            })
          }}><ThumbDown/></IconButton></Typography>
          <Typography variant={'p'}>{pointStore.point.thumbsDown} SMENTITE</Typography>
        </div>
      </div>
    </div>
  )
}

PointPage.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  store: PropTypes.object
}

export default withRouter(inject('store')(observer(PointPage)))
