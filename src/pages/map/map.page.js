import React, { useState } from 'react'
import { useStyles } from './map.style'
import { Button, Typography } from '@material-ui/core'
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
      '',
      ''
    ],
    locationPhotoUrl: 'http://...',
    locationType: 'privato',
    pointType: ['carrello', 'centro raccolta'],
    categoryType: ['alimentari', 'pasti'],
    createdAt: '2020-04-10T08:00:00',
    updateddAt: '2020-04-10T08:00:00'
  }
]

const MapPage = (props) => {
  const classes = useStyles()
  const { store: { utility: { locationStore } } } = props
  const [center, setCenter] = useState(null)

  const formatPoints = () => {
    return points.map(item => {
      const type = item.pointType[0]
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
          defaultZoom={13}
        >
          <img
            src={'/icons/sono_qui.svg'}
            lat={locationStore.lat}
            lng={locationStore.lng}
          />
          {formatPoints()}
        </GoogleMapReact>
      </div>

      <Button onClick={() => setCenter({
        lat: 40.7432066,
        lng: 14.5716994
      })}>Peppe</Button>

      <Button onClick={() => setCenter({
        lat: 40.7469487,
        lng: 14.6307942
      })}>Peppe Nocera</Button>
    </div>
  )
}

MapPage.propTypes = {
  history: PropTypes.object,
  store: PropTypes.object
}

export default withRouter(inject('store')(observer(MapPage)))
