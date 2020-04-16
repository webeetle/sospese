/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { useStyles } from './reportingpoint.style'
import { Button, Grid, Paper, Typography } from '@material-ui/core'
import { PropTypes } from 'prop-types'
import { withRouter } from 'react-router'
import { inject, observer } from 'mobx-react'
import { Field, Form } from 'react-final-form'
import TextFieldWrapper from '../../../components/Form/Wrapper/textfield.form.wrapper.component'
import RadioGroupWrapper from '../../../components/Form/Wrapper/radiogroup.form.wrapper.component'

const ReportingPointPage = (props) => {
  const classes = useStyles()
  // const { history, store: { pages: { point: pointStore } } } = props

  return (
    <div className={classes.root}>
      <Paper rounded className={classes.container}>
        <Form
          onSubmit={() => {
          }}
          validate={() => {
          }}
          render={({ values, form, handleSubmit }) => {
            return (
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant={'h3'} className={classes.title}>Segnala punto</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name={'nome'}
                    label={'Nome'}
                    component={TextFieldWrapper}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name={'provincia'}
                    label={'Provincia'}
                    component={TextFieldWrapper}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name={'citta'}
                    label={'Città'}
                    component={TextFieldWrapper}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name={'cap'}
                    label={'CAP'}
                    component={TextFieldWrapper}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name={'indirizzo'}
                    label={'Indirizzo'}
                    component={TextFieldWrapper}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name={'telefono'}
                    label={'Telefono'}
                    component={TextFieldWrapper}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography color={'primary'}>Cos'è</Typography>
                  <Field
                    name={'tipo'}
                    rowsData={[
                      {
                        label: 'Privato',
                        value: 'privato'
                      },
                      {
                        label: 'Attività Commerciale',
                        value: 'attivita_commerciale'
                      },
                      {
                        label: 'Ente o Associazione',
                        value: 'ente_associazione'
                      }
                    ]}
                    component={RadioGroupWrapper}
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
