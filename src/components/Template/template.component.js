import React from 'react'
import { PropTypes } from 'prop-types'
import { AppBar, IconButton, SwipeableDrawer, Toolbar, Typography } from '@material-ui/core'
import { Close as CloselIcon, Menu as MenuIcon } from '@material-ui/icons'
import { useStyles } from './template.style'
import useToggle from '../../hooks/useToggle'
import ListMenu from './template.listmenu.component'

const Template = props => {
  const classes = useStyles()
  const menuToggle = useToggle(false)

  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu">
            <MenuIcon onClick={menuToggle.toggle}/>
          </IconButton>
          <div className={classes.logoContainer}>
            <img alt={'sospese'} src={'logo.svg'} className={classes.logo}/>
            <Typography>DOVE IL SEGNALE SEI TU</Typography>
          </div>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        anchor={'right'}
        open={menuToggle.on}
        onClose={menuToggle.toggle}
      >
        <IconButton className={classes.closeMenuButton} onClick={menuToggle.toggle}>
          <CloselIcon/>
        </IconButton>

        <ListMenu handleClick={menuToggle.toggle}/>

      </SwipeableDrawer>

      {props.children}
      <div className={classes.footer}>
        <img src={'icons/sos_footer.svg'} height={90}/>
        <Typography className={'grazie'}>GRAZIE!</Typography>
        <Typography className={'andratuttobene'}>#andràtuttobene</Typography>
        <Typography className={'copyright'}>© 2020 <a rel="noopener noreferrer" href={'https://webeetle.com'} target={'_blank'}>weBeetle srl</a></Typography>
      </div>
    </div>
  )
}

Template.propTypes = {
  children: PropTypes.node
}

export default Template
