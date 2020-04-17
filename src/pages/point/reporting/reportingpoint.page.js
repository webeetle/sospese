/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { useStyles } from './reportingpoint.style'
import { Button, Grid, Paper, Typography } from '@material-ui/core'
import { Field, Form } from 'react-final-form'
import { PropTypes } from 'prop-types'
import TextFieldWrapper from '../../../components/Form/Wrapper/textfield.form.wrapper.component'
import GooglePlacesAutocomplete, { geocodeByPlaceId, getLatLng } from 'react-google-places-autocomplete'
import { formatInput, formatSuggestion } from '../../../utils/google.utils'
import { withRouter } from 'react-router'
import { inject, observer } from 'mobx-react'
import SelectWrapper from '../../../components/Form/Wrapper/select.form.wrapper.component'
import { getTypePointSelect } from '../../../utils/point.utils'

const ReportingPointPage = (props) => {
  const classes = useStyles()
  const { history, store: { pages: { point } } } = props

  const setLocation = (args, state, utils) => {
    const location = args[0]
    utils.changeValue(state, 'address', () => location.address.description)
    utils.changeValue(state, 'lat', () => location.coords.lat)
    utils.changeValue(state, 'lng', () => location.coords.lng)
  }

  const validate = (values) => {
  }

  const onSubmit = (values) => {
    point.reportingPoint(values, ({ data }) => {
      history.push('/grazie')
    })
  }

  return (
    <div className={classes.root}>
      <Paper rounded className={classes.container}>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          mutators={{
            setLocation: setLocation
          }}
          render={({ values, form, handleSubmit }) => {
            return (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant={'h3'} className={classes.title}>Segnala nuovo punto</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name={'name'}
                    label={'Nome'}
                    component={TextFieldWrapper}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <GooglePlacesAutocomplete
                    placeholder={'Inserisci indirizzo / Nome attività'}
                    initialValue={values.address}
                    renderSuggestions={(active, suggestions, onSelectSuggestion) => formatSuggestion(classes, active, suggestions, onSelectSuggestion)}
                    autocompletionRequest={{ componentRestrictions: { country: 'it' } }}
                    renderInput={formatInput}
                    onSelect={async (val) => {
                      try {
                        const data = await geocodeByPlaceId(val.place_id)
                        const coords = await getLatLng(data[0])
                        form.mutators.setLocation({
                          address: val,
                          coords: coords
                        })
                      } catch (err) {
                        console.log(err)
                      }
                    }}/>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name={'tel'}
                    label={'Telefono'}
                    component={TextFieldWrapper}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <Field
                    name={'pointType'}
                    placeholder={'Categoria'}
                    component={SelectWrapper}
                    rowsData={getTypePointSelect()}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name={'note'}
                    label={'Note'}
                    component={TextFieldWrapper}
                    rows={5}
                    multiline
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} className={classes.submit}>
                  <Button color={'primary'} variant={'contained'} onClick={form.reset}>svuota</Button>
                  <Button color={'secondary'} variant={'contained'} onClick={handleSubmit}>INVIA</Button>
                </Grid>

              </Grid>
            )
          }}
        />
      </Paper>
    </div>
  )
}

ReportingPointPage.propTypes = {
  history: PropTypes.object,
  store: PropTypes.object
}

export default withRouter(inject('store')(observer(ReportingPointPage)))
