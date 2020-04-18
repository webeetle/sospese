/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { useStyles } from './reportingpoint.style'
import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { Field, Form } from 'react-final-form'
import { PropTypes } from 'prop-types'
import TextFieldWrapper from '../../../components/Form/Wrapper/textfield.form.wrapper.component'
import GooglePlacesAutocomplete, { geocodeByPlaceId, getLatLng } from 'react-google-places-autocomplete'
import { formatSuggestion } from '../../../utils/google.utils'
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
    const errors = {}
    if (!values.name || values.name === '') {
      errors.name = 'Campo obbligatorio'
    }
    if (!values.address || values.address === '') {
      errors.address = 'Campo obbligatorio'
    }
    if (!values.pointType || values.pointType === '') {
      errors.pointType = 'Campo obbligatorio'
    }
    return errors
  }

  const onSubmit = (values) => {
    point.reportingPoint(values, ({ data }) => {
      history.push('/grazie')
    })
  }

  return (
    <div className={classes.root}>
        <Grid container>
          <Grid item lg={3} md={2} sm={1}/>
          <Grid item lg={6} md={8} sm={10}>
            <Paper rounded className={classes.container}>
              <Form
                onSubmit={onSubmit}
                validate={validate}
                mutators={{
                  setLocation: setLocation
                }}
                render={({ values, form, handleSubmit }) => {
                  return (
                    <form
                      onSubmit={handleSubmit}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Typography variant={'h3'} className={classes.title}>Segnala nuovo punto</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                          <Field
                            name={'name'}
                            label={'Nome'}
                            component={TextFieldWrapper}
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                          <Field name={'address'}>
                            {({ input, meta }) => {
                              return (
                                <GooglePlacesAutocomplete
                                  {...input}
                                  meta={meta}
                                  debounce={500}
                                  placeholder={'Inserisci indirizzo / Nome attività'}
                                  initialValue={values.address}
                                  renderSuggestions={(active, suggestions, onSelectSuggestion) => formatSuggestion(classes, active, suggestions, onSelectSuggestion)}
                                  autocompletionRequest={{ componentRestrictions: { country: 'it' } }}
                                  renderInput={(props) => {
                                    // eslint-disable-next-line
                                    props.label = props.placeholder
                                    props.fullWidth = true
                                    props.error = (meta.error && meta.touched)
                                    props.helperText = meta.touched ? meta.error : ''
                                    // eslint-disable-next-line
                                    delete props.placeholder
                                    return <TextField {...props} />
                                  }}
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
                              )
                            }}
                          </Field>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                          <Field
                            name={'tel'}
                            label={'Telefono'}
                            component={TextFieldWrapper}
                            fullWidth
                          />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6}>
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
                            disableUnderline={true}
                          />
                        </Grid>
                        <Grid item xs={12} className={classes.submit}>
                          <Button color={'primary'} variant={'contained'} onClick={form.reset}>svuota</Button>
                          <Button color={'secondary'} variant={'contained'} onClick={handleSubmit}
                                  disabled={form.error}>INVIA</Button>
                        </Grid>

                      </Grid>
                    </form>
                  )
                }}
              />
            </Paper>
          </Grid>
        </Grid>
    </div>
  )
}

ReportingPointPage.propTypes = {
  history: PropTypes.object,
  store: PropTypes.object
}

export default withRouter(inject('store')(observer(ReportingPointPage)))
