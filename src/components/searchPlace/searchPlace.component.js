import React from 'react'
import { useStyles } from './searchPlace.style'
import GooglePlacesAutocomplete, { geocodeByPlaceId, getLatLng } from 'react-google-places-autocomplete'
import { Button, List, ListItem, ListItemText, Paper, TextField, Typography } from '@material-ui/core'
import { NearMe } from '@material-ui/icons'
import { PropTypes } from 'prop-types'

const SearchPlace = (props) => {
  const { onCoordsFound } = props
  const classes = useStyles()

  const geoSettings = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }
  const geo = navigator.geolocation

  const formatInput = input => {
    input.label = input.placeholder
    input.fullWidth = true
    delete input.placeholder
    return (
      <TextField
        {...input}
      />
    )
  }

  const formatSuggestion = (active, suggestions, onSelectSuggestion) => (
    <Paper elevation={0}>
      <List className={classes.listResult}>
        {
          suggestions.map((suggestion) => (
            <ListItem
              key={suggestion.description}
              button
              onClick={(event) => onSelectSuggestion(suggestion, event)}
            >
              <ListItemText>{suggestion.description}</ListItemText>
            </ListItem>
          ))
        }
      </List>
    </Paper>
  )

  return (
    <div className={classes.root}>
      <Typography variant={'h5'} className={classes.title} align={'center'}>Cerca un punto</Typography>
      <div className={classes.google}>
        <GooglePlacesAutocomplete
          placeholder={'Inserisci indirizzo'}
          renderSuggestions={formatSuggestion}
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
