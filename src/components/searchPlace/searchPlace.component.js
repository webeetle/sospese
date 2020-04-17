import React from 'react'
import { useStyles } from './searchPlace.style'
import GooglePlacesAutocomplete, { geocodeByPlaceId, getLatLng } from 'react-google-places-autocomplete'
import { Button, Typography } from '@material-ui/core'
import { NearMe } from '@material-ui/icons'
import { PropTypes } from 'prop-types'
import { formatInput, formatSuggestion } from '../../utils/google.utils'

const SearchPlace = (props) => {
  const { onCoordsFound } = props
  const classes = useStyles()

  const geoSettings = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }
  const geo = navigator.geolocation

  return (
    <div className={classes.root}>
      <Typography variant={'h5'} className={classes.title} align={'center'}>Cerca un punto</Typography>
      <div className={classes.google}>
        <GooglePlacesAutocomplete
          placeholder={'Inserisci indirizzo'}
          renderSuggestions={(active, suggestions, onSelectSuggestion) => formatSuggestion(classes, active, suggestions, onSelectSuggestion)}
          autocompletionRequest={{ componentRestrictions: { country: 'it' } }}
          renderInput={formatInput}
          onSelect={async (val) => {
            try {
              const data = await geocodeByPlaceId(val.place_id)
              const coords = await getLatLng(data[0])
              onCoordsFound(coords)
            } catch (err) {
              console.log(err)
            }
          }}/>
      </div>
      {geo
        ? <React.Fragment>
          <Typography className={classes.label} align={'center'} variant={'label'}>oppure</Typography>

          <Button
            fullWidth
            className={classes.geoButton}
            color={'primary'}
            variant={'contained'}
            startIcon={<NearMe/>}
            onClick={() => {
              geo.getCurrentPosition(({ coords }) => onCoordsFound({
                lat: coords.latitude,
                lng: coords.longitude
              }), console.log, geoSettings)
            }}
          >
            Qui Vicino
          </Button>
        </React.Fragment>
        : null}
    </div>
  )
}

export default SearchPlace

SearchPlace.propTypes = {
  onCoordsFound: PropTypes.func
}
