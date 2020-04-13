import { Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import React from 'react'
import { withRouter } from 'react-router-dom'
import { useStyles } from './template.style'
import { PropTypes } from 'prop-types'

const paths = [
  {
    name: 'home',
    href: '/'
  },
  {
    name: 'cerca un punto',
    href: '/search'
  },
  {
    name: 'ho donato',
    href: '/'
  },
  {
    name: 'segnala un punto',
    href: '/'
  },
  {
    name: 'supporters',
    href: '/'
  }
]

const ListMenu = (props) => {
  const classes = useStyles()
  const { history } = props

  const navigate = (path) => {
    history.push(path)
    props.handleClick()
  }

  const format = () => {
    return paths.map(item =>
      <ListItem key={item.name} button onClick={() => navigate(item.href)}>
        <ListItemText>
          <Typography className={classes.listMenuText}>{item.name}</Typography>
        </ListItemText>
      </ListItem>
    )
  }

  return (
    <div className={classes.menuContainer}>
      <Grid container>
        <Grid item xs={12} justify={'center'}>
          <div className={classes.logoContainer}>
            <img alt={'sospese'} src={'logo.svg'} className={classes.logo}/>
            <Typography color={'secondary'}>DOVE IL SEGNALE SEI TU</Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <List className={classes.listMenu}>
            {format()}
          </List>
        </Grid>
      </Grid>
    </div>
  )
}

ListMenu.propTypes = {
  history: PropTypes.object,
  handleClick: PropTypes.func
}

export default withRouter(ListMenu)
