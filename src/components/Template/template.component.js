import React from 'react'
import { PropTypes } from 'prop-types'
import { AppBar, IconButton, SwipeableDrawer, Toolbar } from '@material-ui/core'
import { Close as CloselIcon, Menu as MenuIcon } from '@material-ui/icons'
import { useStyles } from './template.style'
import { ReactComponent as Logo } from '../../logo.svg'
import useToggle from '../../hooks/useToggle'
import ListMenu from './template.listmenu.component'

const Template = props => {
  const classes = useStyles()
  const menuToggle = useToggle(false)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu">
            <MenuIcon onClick={menuToggle.toggle}/>
          </IconButton>
          <Logo className={classes.logo}/>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        anchor={'left'}
        open={menuToggle.on}
        onClose={menuToggle.toggle}
      >
        <IconButton className={classes.closeMenuButton} onClick={menuToggle.toggle}>
          <CloselIcon/>
        </IconButton>

        <ListMenu onButtonClick={menuToggle.toggle}/>

      </SwipeableDrawer>

      {props.children}
    </div>
  )
}

Template.propTypes = {
  children: PropTypes.node
}

export default Template
