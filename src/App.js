import React from 'react';
import './App.css';

function App() {

  const Coordinate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        return (
          <pre>
            { 
              JSON.stringify(position, null, 2)
            }
          </pre>
        );
      });
    } else {
    return (
      <h1>Non supportata.</h1>
    );
    }
  }

  return (
    <div className="App">
      <Coordinate />
    </div>
  );
}

export default App;