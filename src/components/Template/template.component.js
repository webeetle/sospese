import React from 'react'
import { PropTypes } from 'prop-types'
import { AppBar, IconButton, SwipeableDrawer, Toolbar, Typography } from '@material-ui/core'
import { Close as CloselIcon, Menu as MenuIcon } from '@material-ui/icons'
import { useStyles } from './template.style'
import useToggle from '../../hooks/useToggle'
import ListMenu from './template.listmenu.component'
import { withRouter } from 'react-router'

const Template = props => {
  const classes = useStyles()
  const menuToggle = useToggle(false)
  const { history } = props

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="fixed" elevation={0}>
          <Toolbar className={classes.toolbar}>
            <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu">
              <MenuIcon onClick={menuToggle.toggle}/>
            </IconButton>
            <div className={classes.logoContainer}>
              <img alt={'sospese'} src={'/logo.svg'} className={classes.logo} onClick={() => {
                history.push('/')
              }}/>
              <Typography>DONA, CONDIVIDI, LASCIA UN SEGNO</Typography>
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
      </div>
      <div className={classes.footer}>
        <img alt={'sos'} src={'/icons/sos_footer.svg'} height={90}/>
        <Typography className={'grazie'}>GRAZIE!</Typography>
        <Typography className={'andratuttobene'}>#andràtuttobene</Typography>
        <Typography className={'copyright'}>© 2020 <a rel="noopener noreferrer" href={'https://webeetle.com'}
                                                      target={'_blank'}>weBeetle srl</a></Typography>
        <Typography><a href="https://www.iubenda.com/privacy-policy/29835063"
                       className="iubenda-white no-brand iubenda-embed" title="Privacy Policy ">Privacy Policy</a></Typography>
      </div>
    </React.Fragment>
  )
}

Template.propTypes = {
  children: PropTypes.node,
  history: PropTypes.object
}

export default withRouter(Template)
