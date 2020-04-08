import React from 'react';
import './App.css';
import { geolocated } from "react-geolocated";

function App(props) {

  const Coordinate = () => {
    return !props.isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !props.isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : props.coords ? (
        <table>
            <tbody>
                <tr>
                    <td>latitude</td>
                    <td>{props.coords.latitude}</td>
                </tr>
                <tr>
                    <td>longitude</td>
                    <td>{props.coords.longitude}</td>
                </tr>
                <tr>
                    <td>altitude</td>
                    <td>{props.coords.altitude}</td>
                </tr>
                <tr>
                    <td>heading</td>
                    <td>{props.coords.heading}</td>
                </tr>
                <tr>
                    <td>speed</td>
                    <td>{props.coords.speed}</td>
                </tr>
            </tbody>
        </table>
    ) : (
        <div>Getting the location data&hellip; </div>
    );
  }

  return (
    <div className="App">
      <Coordinate />
    </div>
  );
}

export default geolocated({
  positionOptions: {
      enableHighAccuracy: true,
  },
  userDecisionTimeout: 5000,
})(App);