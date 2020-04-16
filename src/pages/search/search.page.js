import React from 'react'
import { useStyles } from './search.style'
import SearchPlace from '../../components/searchPlace/searchPlace.component'
import { withRouter } from 'react-router'
import { inject, observer } from 'mobx-react'
import { PropTypes } from 'prop-types'

const SearchPage = (props) => {
  const classes = useStyles()
  const { history, store: { pages: { map: locationStore } } } = props

  return (
    <div className={classes.root}>
      <SearchPlace onCoordsFound={coords => {
        locationStore.setLocations(coords)
        history.push('/map')
      }}/>
    </div>
  )
}

export default withRouter(inject('store')(observer(SearchPage)))

SearchPage.propTypes = {
  history: PropTypes.object,
  store: PropTypes.object
}
