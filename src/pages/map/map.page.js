import React, { useState } from 'react'
import { useStyles } from './map.style'
import { Button, Grid, List, ListItem, Typography } from '@material-ui/core'
import GoogleMapReact from 'google-map-react'
import { constants } from '../../constants'
import { PropTypes } from 'prop-types'
import { withRouter } from 'react-router'
import { inject, observer } from 'mobx-react'

const points = [
  {
    address: 'Via Semetelle, 26 Angri (SA)',
    location: {
      type: 'Point',
      coordinates: [14.5714279, 40.7436949]
    },
    lat: 40.7436949,
    lng: 14.5714279,
    name: 'WeBeetle S.r.l.',
    note: '',
    contacts: [
      '3201934954',
      'info@webeetle.com'
    ],
    locationPhotoUrl: 'http://...',
    locationType: 'privato',
    pointType: ['carrello', 'centro raccolta'],
    categoryType: ['alimentari', 'pasti'],
    createdAt: '2020-04-10T08:00:00',
    updateddAt: '2020-04-10T08:00:00'
  },
  {
    address: 'Via Risi, 12 Angri (SA)',
    location: {
      type: 'Point',
      coordinates: [14.5720258, 40.7417721]
    },
    lat: 40.7417721,
    lng: 14.5720258,
    name: 'Peppe S.r.l.',
    note: '',
    contacts: [
      '3201934954'
    ],
    locationPhotoUrl: 'http://...',
    locationType: 'privato',
    pointType: ['centro raccolta'],
    categoryType: ['alimentari', 'pasti'],
    createdAt: '2020-04-10T08:00:00',
    updateddAt: '2020-04-10T08:00:00'
  }
]

const MapPage = (props) => {
  const classes = useStyles()
  const { store: { utility: { locationStore } } } = props
  // eslint-disable-next-line no-unused-vars
  const [center, setCenter] = useState(null)

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
    }
    return src
  }

  const formatListPoint = () => {
    return points.map(item => {
      const type = item.pointType[0]
      const src = getIcon(type)
      return (
        <React.Fragment key={item._id}>
          <ListItem className={classes.item}>
            <Grid container>
              <Grid item xs={2}>
                <img src={src}/>
              </Grid>
              <Grid item xs={6}>
                <Typography className={'title'}>{item.name}</Typography>
                <Typography className={'distance'}>distanza: 0.3 KM</Typography>
                <Typography className={'address'}>{item.address}</Typography>
                <Typography className={'contacts'}>{item.contacts.join(' - ')}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Button fullWidth size={'small'} variant={'contained'} color={'secondary'}>Ho Donato</Button>
              </Grid>
            </Grid>
          </ListItem>
          <hr/>
        </React.Fragment>
      )
    })
  }
  const formatPoints = () => {
    return points.map(item => {
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
          bootstrapURLKeys={{
            key: constants.googleAPIKey,
            language: 'it',
            region: 'it'
          }}
          defaultCenter={{
            lat: locationStore.lat,
            lng: locationStore.lng
          }}
          center={center || {
            lat: locationStore.lat,
            lng: locationStore.lng
          }}
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
