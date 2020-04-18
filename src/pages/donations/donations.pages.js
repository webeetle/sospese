import React from 'react'
import { useStyles } from './donations.style'
import { withRouter } from 'react-router'
import { inject, observer } from 'mobx-react'
import { PropTypes } from 'prop-types'
import { Button, Grid, Paper } from '@material-ui/core'
import { AddAPhotoOutlined } from '@material-ui/icons'
import { Form } from 'react-final-form'
import { DropzoneArea } from 'material-ui-dropzone'

const DonationsPage = (props) => {
  const classes = useStyles()
  const { history } = props

  const validate = () => {
  }
  const onSubmit = () => {
  }

  return (
    <div className={classes.root}>
      <Paper rounded className={classes.container}>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ values, form, handleSubmit }) => {
            return (
              <Grid container>
                <Grid item xs={12}>
                  <DropzoneArea
                    dropzoneText={<AddAPhotoOutlined className={'imgUp'} />}
                    dropzoneClass={classes.dropzone}
                    filesLimit={1}
                  />
                </Grid>

                <Grid item xs={12} className={classes.submit}>
                  <Button color={'primary'} size={'small'} variant={'contained'} onClick={() => history.push('/')}>Vai in home</Button>
                  <Button color={'secondary'} size={'small'} variant={'contained'}
                          onClick={() => history.push('/point/reporting')}>Segnala altro</Button>
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
