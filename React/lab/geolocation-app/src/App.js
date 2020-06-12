import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const coordinates = navigator.geolocation.watchPosition(
      handlePositionReceived
    );

    return () => navigator.geolocation.clearWatch(coordinates);
  }, []);

  function handlePositionReceived({ coords }) {
    console.log(coords);
    const { latitude, longitude } = coords;
    setLocation({ latitude, longitude });
  }
  return (
    <>
      Latitude: {location.latitude} <br />
      Longitude: {location.longitude}
    </>
  );
}

export default App;
