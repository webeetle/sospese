import React, { useEffect, useState } from 'react'
import { useStyles } from './donations.style'
import { withRouter } from 'react-router'
import { inject, observer } from 'mobx-react'
import { PropTypes } from 'prop-types'
import { Button, Grid, Paper, Typography } from '@material-ui/core'
import { AddAPhotoOutlined } from '@material-ui/icons'
import { Field, Form } from 'react-final-form'
import { DropzoneArea } from 'material-ui-dropzone'
import TextFieldWrapper from '../../components/Form/Wrapper/textfield.form.wrapper.component'

const DonationsPage = (props) => {
  const classes = useStyles()
  const { history, store: { pages: { point: pointStore } } } = props
  const [selfie, setSelfie] = useState(null)
  const [point, setPoint] = useState(null)

  useEffect(() => {
    if (Object.keys(pointStore.point).length === 0) {
      history.push('/search')
    }
    pointStore.getPoint(null, false, point => setPoint(point))
  }, [])

  const validate = () => {
  }
  const onSubmit = (values) => {
    pointStore.saveDonation(values, () => {
      history.push('/donations/grazie')
    })
  }

  return (
    <div className={classes.root}>
      <Paper rounded className={classes.container}>
        <Form
          initialValues={{ _id: point ? point._id : '' }}
          onSubmit={onSubmit}
          validate={validate}
          render={({ values, form, handleSubmit }) => {
            return (
              <Grid container>
                <Grid item xs={12}>
                  {selfie ? <img alt={'selfie'} className={'selfie'} src={selfie}/>
                    : <React.Fragment>
                      <DropzoneArea
                        acceptedFiles={['image/jpeg', 'image/png', 'image/jpg']}
                        maxFileSize={'25000000'}
                        dropzoneText={<AddAPhotoOutlined className={'imgUp'}/>}
                        dropzoneClass={classes.dropzone}
                        onChange={files => {
                          const file = files[0]
                          const reader = new FileReader()
                          reader.readAsDataURL(file)
                          reader.onload = () => {
                            pointStore.setSelfie(reader.result)
                            pointStore.setFrozenFile(file)
                            setSelfie(reader.result)
                          }
                        }}
                        filesLimit={1}
                      />
                      <Typography className={classes.subTitle}>Inserisci un selfie sospeso</Typography>
                    </React.Fragment>
                  }
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
                  <Field
                    name={'message'}
                    label={'Scrivi un pensiero di supporto'}
                    component={TextFieldWrapper}
                    rows={5}
                    multiline
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} className={classes.submit}>
                  <Button color={'primary'} size={'small'} variant={'contained'} onClick={() => history.push('/')}>Vai
                    in home</Button>
                  <Button color={'secondary'} size={'small'} variant={'contained'}
                          onClick={handleSubmit}>Conferma</Button>
                </Grid>
              </Grid>
            )
          }}/>

      </Paper>
    </div>
  )
}

export default withRouter(inject('store')(observer(DonationsPage)))

DonationsPage.propTypes = {
  history: PropTypes.object,
  store: PropTypes.object
}
