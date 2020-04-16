import React from 'react'
import { useStyles } from './point.style'
import { Button, Grid, Paper, Typography, IconButton } from '@material-ui/core'
import { ThumbDown, ThumbUp } from '@material-ui/icons'
import { PropTypes } from 'prop-types'
import { withRouter } from 'react-router'
import { inject, observer } from 'mobx-react'

const PointPage = (props) => {
  const classes = useStyles()
  const { history, store: { pages: { point: pointStore } } } = props

  const getIcon = (type) => {
    let src = ''
    switch (type) {
      case 'cesto':
      case 'privato':
        src = '/icons/cesto_point.svg'
        break
      case 'libreria':
        src = '/icons/libreria_point.svg'
        break
      case 'bar':
        src = '/icons/bar_point.svg'
        break
      case 'carrello':
        src = '/icons/carrello_point.svg'
        break
      case 'centro raccolta':
        src = '/icons/centro_raccolta_point.svg'
        break
      default:
        src = '/icons/cesto_point.svg'
        break
    }
    return src
  }

  const src = getIcon(pointStore.point.pointType[0])

  return (
    <div className={classes.root}>
      <Typography variant={'h6'} className={classes.titlePage} onClick={() => history.push('/map')}>Ritorna ai punti
        Sospesi</Typography>
      <div className={classes.imgHighlights} style={{ background: 'url(\'/placeholder.png\')' }}>
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
            <Typography className={'distance'}>Distanza: {(pointStore.point.dist.calculated / 1000).toFixed(2)} KM</Typography>
          </Grid>
        </Grid>
        <Paper rounded className={'paper'}>
          <Typography className={'address'}>{pointStore.point.address}</Typography>
          <Typography className={'contacts'}>{pointStore.point.contacts ? pointStore.point.contacts.join(' - ') : ''}</Typography>
          <Typography className={classes.noteTitle}>Note</Typography>
          <div className={classes.notes}>
            {pointStore.point.note}
          </div>
        </Paper>
      </div>
      <div className={classes.likes}>
        <div>
          <Typography variant={'h4'}><IconButton onClick={() => {}}><ThumbUp/></IconButton></Typography>
          <Typography variant={'p'}>{pointStore.point.thumbsUp} CONFERME</Typography>
        </div>
        <div>
          <Typography variant={'h4'}><IconButton onClick={() => {}}><ThumbDown/></IconButton></Typography>
          <Typography variant={'p'}>{pointStore.point.thumbsDown} SMENTITE</Typography>
        </div>
      </div>
    </div>
  )
}

PointPage.propTypes = {
  history: PropTypes.object,
  store: PropTypes.object
}

export default withRouter(inject('store')(observer(PointPage)))
