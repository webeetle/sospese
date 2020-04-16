import React, { useEffect, useState } from 'react'
import { useStyles } from './map.style'
import { Button, Grid, List, ListItem, Typography } from '@material-ui/core'
import GoogleMapReact from 'google-map-react'
import { constants } from '../../constants'
import { PropTypes } from 'prop-types'
import { withRouter } from 'react-router'
import { inject, observer } from 'mobx-react'

const bootstrap = {
  key: constants.googleAPIKey,
  language: 'it',
  region: 'it'
}

const MapPage = (props) => {
  const classes = useStyles()
  const { history, store: { pages: { map: locationStore, point: pointStore } } } = props
  // eslint-disable-next-line no-unused-vars
  const [center, setCenter] = useState(null)

  const defaultCenter = {
    lat: locationStore.lat,
    lng: locationStore.lng
  }

  useEffect(() => {
    locationStore.getNearPoints()
  }, [])

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

  const formatListPoint = () => {
    return locationStore.points.length > 0 ? locationStore.points.map(item => {
      const type = item.pointType[0]
      const src = getIcon(type)
      return (
        <React.Fragment key={item._id}>
          <ListItem className={classes.item}>
            <Grid container spacing={1}>
              <Grid item xs={2}>
                <img src={src} style={{ width: 30 }}/>
              </Grid>
              <Grid item xs={6}>
                <Typography className={'title'}>{item.name}</Typography>
                <Typography className={'distance'}>Distanza: {(item.dist.calculated / 1000).toFixed(2)} KM</Typography>
                <Typography className={'address'}>{item.address}</Typography>
                <Typography className={'contacts'}>{item.contacts ? item.contacts.join(' - ') : ''}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Button fullWidth size={'small'} variant={'contained'} color={'secondary'}>Ho Donato</Button>
                <Button fullWidth size={'small'} variant={'contained'} color={'primary'}
                        style={{ marginTop: 10 }}
                        onClick={() => {
                          pointStore.setPoint(item)
                          history.push(`/point/${item._id}`)
                        }}
                >Dettaglio</Button>
              </Grid>
            </Grid>
          </ListItem>
          <hr/>
        </React.Fragment>
      )
    }) : null
  }
  const formatPoints = () => {
    return locationStore.points.map(item => {
      const type = item.pointType[0]
      const src = getIcon(type)
      const [lng, lat] = item.location.coordinates
      return (
        <img
          key={item._id}
          src={src}
          lat={lat}
          lng={lng}
        />
      )
    })
  }

  return (
    <div className={classes.root}>
      <Typography variant={'h6'} className={classes.titlePage}>Punti Sospesi</Typography>
      <div className={classes.map}>
        <GoogleMapReact
          bootstrapURLKeys={bootstrap}
          defaultCenter={defaultCenter}
          center={center || defaultCenter}
          defaultZoom={15}
        >
          {formatPoints()}
          <img
            src={'/icons/sono_qui.svg'}
            lat={locationStore.lat}
            lng={locationStore.lng}
          />
        </GoogleMapReact>
      </div>

      <div className={classes.listItem}>
        <List>
          {formatListPoint()}
        </List>
      </div>
    </div>
  )
}

MapPage.propTypes = {
  history: PropTypes.object,
  store: PropTypes.object
}

export default withRouter(inject('store')(observer(MapPage)))
