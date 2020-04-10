import { Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import { ReactComponent as Logo } from '../../logo.svg'
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
    href: '/test'
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
    props.onButtonClick()
  }

  const formatList = () => {
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
          <Typography align={'center'}><Logo className={classes.logo}/></Typography>
        </Grid>
        <Grid item xs={12}>
          <List className={classes.listMenu}>
            {formatList()}
          </List>
        </Grid>
      </Grid>
    </div>
  )
}

ListMenu.propTypes = {
  history: PropTypes.object,
  onButtonClick: PropTypes.func
}

export default withRouter(ListMenu)
