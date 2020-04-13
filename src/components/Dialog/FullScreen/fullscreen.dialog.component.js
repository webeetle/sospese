import React from 'react'
import { useStyles } from './fullscreen.dialog.style'
import { AppBar, Dialog, IconButton, Toolbar, Typography } from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'
import { PropTypes } from 'prop-types'

export function FullScreenDialog (props) {
  const { open, handleClose, title, children } = props
  const classes = useStyles()

  return (
    <Dialog className={classes.root} fullScreen open={open} onClose={handleClose}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </Dialog>
  )
}

FullScreenDialog.propTypes = {
  children: PropTypes.node,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string
}
