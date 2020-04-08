import React from 'react';
import './App.css';
import {usePosition} from './usePosition';

function App() {
  const {latitude, longitude, error} = usePosition();
  return (
    <div className="App">
      <h1>Test</h1>
      <code>
        latitude: {latitude}<br/>
        longitude: {longitude}<br/>
        error: {error}
      </code>
    </div>
  );
}

export default App;