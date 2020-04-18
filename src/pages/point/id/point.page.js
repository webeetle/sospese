import React, { useEffect, useState } from 'react'
import { useStyles } from './point.style'
import { Button, Grid, Hidden, IconButton, Paper, Typography } from '@material-ui/core'
import { ThumbDown, ThumbUp, ArrowBackIos } from '@material-ui/icons'
import { PropTypes } from 'prop-types'
import { withRouter } from 'react-router'
import { inject, observer } from 'mobx-react'
import { getPointIcon } from '../../../utils/point.utils'
import { constants } from '../../../constants'

const Likes = (props) => {
  const { classes, pointStore, match } = props

  function thumbDisabled () {
    if (localStorage.getItem('vote')) {
      const aVote = JSON.parse(localStorage.getItem('vote'))
      return !!(aVote[pointStore.point._id])
    } else {
      return false
    }
  }

  return <div className={classes.likes}>
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
}

Likes.propTypes = {
  classes: PropTypes.object.isRequired,
  pointStore: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

const BoxDetail = (props) => {
  const { classes, pointStore } = props

  return (
    <div className={classes.detail}>
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
  )
}

BoxDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  pointStore: PropTypes.object.isRequired
}

const Detail = (props) => {
  const { classes, pointStore } = props

  const src = pointStore.point.pointType ? getPointIcon(pointStore.point.pointType) : ''

  return <div className={classes.detail}>
    <Grid container spacing={2}>
      <Grid item xs={2}>
        <img alt={'punto'} src={src} className={'icon'}/>
      </Grid>
      <Grid item xs={10}>
        <Typography className={'title'}>{pointStore.point.name}</Typography>
        {pointStore.point.dist
          ? <Typography
            className={'distance'}>Distanza: {(pointStore.point.dist.calculated / 1000).toFixed(2)} KM</Typography>
          : null}
      </Grid>
    </Grid>
    <BoxDetail classes={classes} pointStore={pointStore}/>
  </div>
}

Detail.propTypes = {
  classes: PropTypes.object.isRequired,
  pointStore: PropTypes.object.isRequired
}

const DetailPC = (props) => {
  const { classes, pointStore, match } = props

  const src = pointStore.point.pointType ? getPointIcon(pointStore.point.pointType) : ''

  return <div className={classes.detail} style={{ paddingRight: 0 }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography className={'title'} style={{ paddingBottom: 10 }}>
          <img alt={'icon'} src={src} className={'icon'}/> {pointStore.point.name}</Typography>
        {pointStore.point.dist
          ? <Typography
            className={'distance'}>Distanza: {(pointStore.point.dist.calculated / 1000).toFixed(2)} KM</Typography>
          : null}

        <MessageDonation classes={classes} pointStore={pointStore} />
        <Likes classes={classes} pointStore={pointStore} match={match}/>
      </Grid>
    </Grid>
  </div>
}

DetailPC.propTypes = {
  classes: PropTypes.object.isRequired,
  pointStore: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

const MessageDonation = (props) => {
  const { classes, pointStore } = props

  return (
    <div className={classes.donationCount}>
      <Grid container alignItems={'center'} spacing={2}>
        <Grid item xs={1}/>
        <Grid item xs={2}>
          <img alt={'cuore'} src={'/icons/heart_w.svg'}/>
        </Grid>
        <Grid item xs={4}>{pointStore.point.totalDonations} Donazioni Raggiunte</Grid>
        <Grid item xs={4}><Button fullWidth size={'small'} variant={'contained'} color={'secondary'}>Ho
          Donato</Button></Grid>
      </Grid>
    </div>
  )
}

MessageDonation.propTypes = {
  classes: PropTypes.object.isRequired,
  pointStore: PropTypes.object.isRequired
}

const PointPage = (props) => {
  const classes = useStyles()
  const { history, match, store: { pages: { point: pointStore } } } = props
  const [addressGood, setAddressGood] = useState('')

  useEffect(() => {
    pointStore.getPoint(match.params.id, false, (point) => {
      const val = `https://maps.googleapis.com/maps/api/streetview?size=800x800&location=${encodeURI(point.address.replace('"', '').replace('&', '').replace('\'', ''))}&key=${constants.googleAPIKey}`
      setAddressGood(val)
    })
  }, [])

  return (
    <div className={classes.root}>
      <Typography variant={'h6'} className={classes.titlePage} onClick={() => history.push('/map')}><ArrowBackIos/> Ritorna ai punti Sospesi</Typography>
      <Hidden smUp>
        <div className={classes.imgHighlights} style={{ background: `url('${addressGood}')` }}>
          <MessageDonation classes={classes} pointStore={pointStore} />
        </div>
        <Detail classes={classes} pointStore={pointStore} />
        <Likes classes={classes} pointStore={pointStore} match={match}/>
      </Hidden>
      <Hidden xsDown>
        <Grid container>
          <Grid item lg={3} md={2} sm={1}/>
          <Grid item lg={6} md={8} sm={10}>
            <div className={classes.detail} style={{ 'padding-bottom': 0 }}>
              <Grid container spacing={2}>
                <Grid item lg={4} md={4} sm={4} style={{ display: 'flex', 'align-items': 'center', 'justify-content': 'center' }}>
                  <img alt={'luogo'} className={classes.imgAvatar} src={`${addressGood}`}/>
                </Grid>
                <Grid item lg={8} md={8} sm={8}>
                  <DetailPC classes={classes} pointStore={pointStore} match={match}/>
                </Grid>
              </Grid>
            </div>
            <Grid container spacing={0}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <BoxDetail classes={classes} pointStore={pointStore}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </div>
  )
}

PointPage.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  store: PropTypes.object
}

export default withRouter(inject('store')(observer(PointPage)))
