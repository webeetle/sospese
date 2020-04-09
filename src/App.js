import React from 'react'
import './App.css'
import { ReactComponent as Logo } from './logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
// import { usePosition } from './usePosition'

function App () {
  // const { latitude, longitude, error } = usePosition()
  return (
    <div className="App">
      <div className="App-header">
        <Logo style={{ width: '25%', height: 'auto' }} />
        <h1>Coming Soon</h1>
        <div>
          Made with <FontAwesomeIcon icon={faHeart} color={'red'} /> by <a className="App-link" href="https://www.webeetle.com/">Webeetle S.r.l.</a>
        </div>
      </div>
      {/* <code>
        latitude: {latitude}<br/>
        longitude: {longitude}<br/>
        error: {error}
      </code> */}
    </div>
  )
}

export default App
